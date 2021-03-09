import useSWR from 'swr'
import { request } from 'graphql-request'
import Link from 'next/link'
import { useRouter } from 'next/router'

const fetcher = (query) => request('http://localhost:3000/graphql', query)

const All = () => {
  const { query } = useRouter()
  const currentPage = query.currentPage || 0
  const pageSize = query.pageSize || 10
  const { data } = useSWR(
    `
  query{
    getAllContactsPaginated(paginationOptions: { pageSize: ${pageSize}, currentPage: ${currentPage} }){
      data{
        id
        name
        email
      }
      total
    }
  }
  `,
    fetcher
  )
  if (!data) {
    return <p>Loading...</p>
  }
  const totalPages = Math.ceil(data.getAllContactsPaginated.total / pageSize)
  const links = [...Array(totalPages).keys()]
  //return <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
    <>
      <ul>
        {data.getAllContactsPaginated.data.map((contact) => {
          return (
            <li key={contact.id}>
              {contact.name} / {contact.email}
            </li>
          )
        })}
      </ul>
      <h3>Pages {totalPages}:</h3>
      <ul>
        {links.map((link) => {
          return (
            <li key={link}>
              <Link
                href={
                  '/paginated-graphql?pageSize=' +
                  pageSize +
                  '&currentPage=' +
                  link
                }
              >
                <a>
                  {link === Number(currentPage) ? '===> ' : ''}
                  {link + 1}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <h3>Page size:</h3>
      <ul>
        <li>
          <Link href='/paginated-graphql?pageSize=5'>
            <a>5</a>
          </Link>
        </li>
        <li>
          <Link href='/paginated-graphql?pageSize=10'>
            <a>10</a>
          </Link>
        </li>
        <li>
          <Link href='/paginated-graphql?pageSize=100'>
            <a>100</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
export default All

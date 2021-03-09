import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'

const fetcher = (url) =>
  fetch('http://localhost:3000' + url).then((r) => r.json())

const All = () => {
  const { query } = useRouter()
  const currentPage = query.currentPage || 0
  const pageSize = query.pageSize || 10
  const { data } = useSWR(
    '/contacts/paginated?pageSize=' + pageSize + '&currentPage=' + currentPage,
    fetcher
  )
  if (!data) {
    return <p>Loading...</p>
  }
  const totalPages = Math.ceil(data.pagination.total / pageSize)
  const links = [...Array(totalPages).keys()]
  // return <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
    <>
      <ul>
        {data.data.map((contact) => {
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
                  '/paginated-rest?pageSize=' +
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
          <Link href='/paginated-rest?pageSize=5'>
            <a>5</a>
          </Link>
        </li>
        <li>
          <Link href='/paginated-rest?pageSize=10'>
            <a>10</a>
          </Link>
        </li>
        <li>
          <Link href='/paginated-rest?pageSize=100'>
            <a>100</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
export default All

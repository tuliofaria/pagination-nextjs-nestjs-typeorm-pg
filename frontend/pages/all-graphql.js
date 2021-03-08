import useSWR from 'swr'
import { request } from 'graphql-request'

const fetcher = (query) => request('http://localhost:3000/graphql', query)

const All = () => {
  const { data } = useSWR(
    `
  query{
    getAllContacts{
      id
      name
      email
    }
  }
  `,
    fetcher
  )
  if (!data) {
    return <p>Loading...</p>
  }
  // return <pre>{JSON.stringify(data)}</pre>
  return (
    <ul>
      {data.getAllContacts.map((contact) => {
        return (
          <li key={contact.id}>
            {contact.name} / {contact.email}
          </li>
        )
      })}
    </ul>
  )
}
export default All

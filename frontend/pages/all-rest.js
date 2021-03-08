import useSWR from 'swr'

const fetcher = (url) =>
  fetch('http://localhost:3000' + url).then((r) => r.json())

const All = () => {
  const { data } = useSWR('/contacts', fetcher)
  if (!data) {
    return <p>Loading...</p>
  }
  // return <pre>{JSON.stringify(data)}</pre>
  return (
    <ul>
      {data.map((contact) => {
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

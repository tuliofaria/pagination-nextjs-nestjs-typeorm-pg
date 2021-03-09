import Link from 'next/link'

const Index = () => {
  return (
    <ul>
      <li>
        <Link href='/all-rest'>All Contacts (REST)</Link>
      </li>
      <li>
        <Link href='/all-graphql'>All Contacts (GraphQL)</Link>
      </li>
      <li>
        <Link href='/paginated-rest'>Paginated Contacts (REST)</Link>
      </li>
      <li>
        <Link href='/paginated-graphql'>Paginated Contacts (GraphQL)</Link>
      </li>
    </ul>
  )
}
export default Index

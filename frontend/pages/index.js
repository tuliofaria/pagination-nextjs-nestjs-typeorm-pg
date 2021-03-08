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
    </ul>
  )
}
export default Index

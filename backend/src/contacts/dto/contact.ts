import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Contact')
export class ContactPublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  email: string
}

@ObjectType('ContactPaginated')
export class ContactPaginated {
  @Field(() => [ContactPublic])
  data: ContactPublic[]

  @Field()
  total: number
}

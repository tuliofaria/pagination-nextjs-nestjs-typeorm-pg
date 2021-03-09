import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ContactPaginationInput {
  @Field({ nullable: true })
  pageSize: number

  @Field({ nullable: true })
  currentPage: number
}

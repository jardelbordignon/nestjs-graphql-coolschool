import { FilterableField } from '@nestjs-query/query-graphql'
import { ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class BasicDTO {
  @FilterableField(() => ID)
  id!: string
}

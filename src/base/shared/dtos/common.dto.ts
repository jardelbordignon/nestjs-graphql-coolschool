import { FilterableField } from '@nestjs-query/query-graphql'
import { GraphQLISODateTime, ObjectType } from '@nestjs/graphql'

import { BasicDTO } from './basic.dto'

@ObjectType()
export class CommonDTO extends BasicDTO {
  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date

  @FilterableField(() => GraphQLISODateTime)
  updatedAt?: Date
}

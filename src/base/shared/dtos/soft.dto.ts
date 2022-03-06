import { FilterableField } from '@nestjs-query/query-graphql'
import { GraphQLISODateTime, ObjectType } from '@nestjs/graphql'

import { CommonDTO } from './common.dto'

@ObjectType()
export class SoftDTO extends CommonDTO {
  @FilterableField(() => GraphQLISODateTime)
  deletedAt?: Date
}

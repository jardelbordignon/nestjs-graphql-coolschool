import { Filter, UpdateManyResponse } from '@nestjs-query/core'
import { FilterType, UpdateManyResponseType } from '@nestjs-query/query-graphql'
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql'

import { UserDTO } from './user.dto'
import { UserService } from './user.service'

@Resolver(() => UserDTO)
export class UserResolver {
  constructor(readonly service: UserService) {}

  @Mutation(() => UserDTO)
  restoreOneUser(
    @Args('input', { type: () => ID }) id: string
  ): Promise<UserDTO> {
    return this.service.restoreOne(id)
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyUsers(
    @Args('input', { type: () => FilterType(UserDTO) })
    filter: Filter<UserDTO>
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter)
  }
}

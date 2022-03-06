import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { UserDTO } from '../user/user.dto'

import { AuthInputDTO } from './auth.dto'
import { JwtAuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { AuthResponse, AuthenticatedUser } from './auth.type'
import { CurrentUser } from './current-user.decorator'

@Resolver()
export class AuthResolver {
  constructor(private service: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(@Args('input') input: AuthInputDTO): Promise<AuthResponse> {
    return this.service.login(input)
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => UserDTO)
  me(@CurrentUser() user: AuthenticatedUser): Promise<UserDTO> {
    return this.service.currentUser(user)
  }
}

import { Field, ObjectType } from '@nestjs/graphql'

import { UserDTO } from '../user/user.dto'
import { User } from '../user/user.entity'

export type AuthenticatedUser = Pick<User, 'id' | 'email'>

export type JwtPayload = {
  sub: string
  email: string
}

export type UserContext = {
  req: {
    user: AuthenticatedUser
  }
}

@ObjectType()
class TokensType {
  @Field()
  accessToken: string

  @Field()
  refreshToken: string
}

@ObjectType()
export class AuthResponse {
  @Field(() => UserDTO)
  user: UserDTO

  @Field(() => TokensType)
  tokens: TokensType
}

import { Resolver } from '@nestjs/graphql'

import { UserTokenDTO } from './user-token.dto'
import { UserTokenService } from './user-token.service'

@Resolver(() => UserTokenDTO)
export class UserTokenResolver {
  constructor(readonly service: UserTokenService) {}
}

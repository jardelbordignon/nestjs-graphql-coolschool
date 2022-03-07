import { Module } from '@nestjs/common'

import { AuthModule } from './auth/auth.module'
import { UserTokenModule } from './user-token/user-token.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [AuthModule, UserModule, UserTokenModule],
})
export class AccountModule {}

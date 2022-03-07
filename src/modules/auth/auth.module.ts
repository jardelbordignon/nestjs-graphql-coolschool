import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserToken } from '../user-token/user-token.entity'
import { UserTokenService } from '../user-token/user-token.service'
import { User } from '../user/user.entity'
import { UserService } from '../user/user.service'

import { JwtStrategy } from './auth.jwt-strategy'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserToken]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_ACCESS_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        },
      }),
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    UserService,
    UserTokenService,
  ],
})
export class AuthModule {}

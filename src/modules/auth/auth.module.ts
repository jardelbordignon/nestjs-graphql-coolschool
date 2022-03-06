import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '../user/user.entity'
import { UserModule } from '../user/user.module'
import { UserService } from '../user/user.service'

import { JwtStrategy } from './auth.jwt-strategy'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '30s',
        },
      }),
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, UserService],
  exports: [AuthService],
})
export class AuthModule {}

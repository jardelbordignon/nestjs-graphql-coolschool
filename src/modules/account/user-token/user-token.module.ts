import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'

import { CreateUserTokenDTO, UserTokenDTO } from './user-token.dto'
import { UserToken } from './user-token.entity'
import { UserTokenResolver } from './user-token.resolver'
import { UserTokenService } from './user-token.service'

@Module({
  imports: [
    // https://doug-martin.github.io/nestjs-query/docs/introduction/example
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserToken])],
      services: [UserTokenService],
      resolvers: [
        {
          ServiceClass: UserTokenService,
          DTOClass: UserTokenDTO,
          CreateDTOClass: CreateUserTokenDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [UserTokenResolver],
})
export class UserTokenModule {}

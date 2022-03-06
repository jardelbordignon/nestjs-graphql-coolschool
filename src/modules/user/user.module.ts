import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'

import { CreateUserDTO, UpdateUserDTO, UserDTO } from './user.dto'
import { User } from './user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  imports: [
    // https://doug-martin.github.io/nestjs-query/docs/introduction/example
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      services: [UserService],
      resolvers: [
        {
          ServiceClass: UserService,
          DTOClass: UserDTO,
          CreateDTOClass: CreateUserDTO,
          UpdateDTOClass: UpdateUserDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [UserResolver],
})
export class UserModule {}

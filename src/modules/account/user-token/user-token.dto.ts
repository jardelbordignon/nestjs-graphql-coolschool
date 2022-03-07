import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql'
import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator'

import { UserDTO } from '../user/user.dto'

import { BasicDTO } from 'src/base/shared/dtos/basic.dto'

@ObjectType('UserToken')
@FilterableRelation('user', () => UserDTO)
export class UserTokenDTO extends BasicDTO {
  @FilterableField()
  userId: string

  @FilterableField()
  refreshToken: string

  @Field()
  expiresAt: Date
}

// Create
@InputType('CreateUserToken')
export class CreateUserTokenDTO {
  @IsUUID()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  refreshToken: string

  @IsDate()
  @IsNotEmpty()
  expiresAt: Date
}

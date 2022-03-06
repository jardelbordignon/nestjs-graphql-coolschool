import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql'
import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator'

import { SoftDTO } from 'src/base/shared/dtos/soft.dto'
import { DisciplineDTO } from 'src/modules/disciplines/dto/discipline.dto'

@ObjectType('User') // renomeia para o graphql, aparece como User no playground
@FilterableOffsetConnection('disciplines', () => DisciplineDTO, {
  nullable: true,
})
export class UserDTO extends SoftDTO {
  @FilterableField()
  name: string

  @FilterableField()
  email: string

  // @Field()
  // password: string
}

// Create
@InputType('CreateUser')
export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string

  @IsString()
  @MaxLength(30)
  password: string
}

// Update
@InputType('UpdateUser')
export class UpdateUserDTO extends PartialType(CreateUserDTO) {}

import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsString } from 'class-validator'

@InputType('AuthInput')
export class AuthInputDTO {
  @Field()
  @IsEmail()
  email!: string

  @Field()
  @IsString()
  password?: string
}

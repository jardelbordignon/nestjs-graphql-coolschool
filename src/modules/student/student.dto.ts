import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql'
import { InputType, ObjectType, PartialType } from '@nestjs/graphql'
import { IsString, MaxLength } from 'class-validator'

import { SoftDTO } from 'src/base/shared/dtos/soft.dto'
import { DisciplineDTO } from 'src/modules/disciplines/dto/discipline.dto'

@ObjectType('Student') // renomeia para o graphql, aparece como Student no playground
@FilterableOffsetConnection('disciplines', () => DisciplineDTO, {
  nullable: true,
})
export class StudentDTO extends SoftDTO {
  @FilterableField()
  name: string

  @FilterableField()
  key: string
}

// Create
@InputType('CreateStudent')
export class CreateStudentDTO {
  @IsString()
  @MaxLength(40)
  name: string

  @IsString()
  @MaxLength(20)
  key: string
}

// Update
@InputType('UpdateStudent')
export class UpdateStudentDTO extends PartialType(CreateStudentDTO) {}

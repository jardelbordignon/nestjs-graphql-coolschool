import { Filter, UpdateManyResponse } from '@nestjs-query/core'
import { FilterType, UpdateManyResponseType } from '@nestjs-query/query-graphql'
import { UseGuards } from '@nestjs/common'
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql'

import { JwtAuthGuard } from '../auth/auth.guard'

import { StudentDTO } from './student.dto'
import { StudentService } from './student.service'

@Resolver(() => StudentDTO)
@UseGuards(JwtAuthGuard)
// @UseInterceptors(AuthorizerInterceptor(TodoItemDTO))
export class StudentResolver {
  constructor(readonly service: StudentService) {}

  @Mutation(() => StudentDTO)
  restoreOneStudent(
    @Args('input', { type: () => ID }) id: string
  ): Promise<StudentDTO> {
    return this.service.restoreOne(id)
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyStudents(
    @Args('input', { type: () => FilterType(StudentDTO) })
    filter: Filter<StudentDTO>
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter)
  }
}

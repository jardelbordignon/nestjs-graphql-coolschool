import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'

import { CreateStudentDTO, StudentDTO, UpdateStudentDTO } from './student.dto'
import { Student } from './student.entity'
import { StudentResolver } from './student.resolver'
import { StudentService } from './student.service'

@Module({
  imports: [
    // https://doug-martin.github.io/nestjs-query/docs/introduction/example
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Student])],
      services: [StudentService],
      resolvers: [
        {
          ServiceClass: StudentService,
          DTOClass: StudentDTO,
          CreateDTOClass: CreateStudentDTO,
          UpdateDTOClass: UpdateStudentDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [StudentResolver],
})
export class StudentModule {}

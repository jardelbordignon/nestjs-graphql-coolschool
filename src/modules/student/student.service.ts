import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Student } from './student.entity'

@QueryService(Student)
export class StudentService extends TypeOrmQueryService<Student> {
  constructor(@InjectRepository(Student) repo: Repository<Student>) {
    super(repo, { useSoftDelete: true })
  }
}

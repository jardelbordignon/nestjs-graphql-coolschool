import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './user.entity'

@QueryService(User)
export class UserService extends TypeOrmQueryService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo, { useSoftDelete: true })
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repo.findOne({ where: { email } })
    if (!user) throw new NotFoundException('User not found')
    return user
  }
}

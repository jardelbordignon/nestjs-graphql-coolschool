import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserToken } from './user-token.entity'

@QueryService(UserToken)
export class UserTokenService extends TypeOrmQueryService<UserToken> {
  constructor(@InjectRepository(UserToken) repo: Repository<UserToken>) {
    super(repo)
  }

  async deleteByUserId(userId: string): Promise<void> {
    const userToken = await this.repo.findOne({ where: { userId } })
    if (userToken) this.repo.delete(userToken.id)
  }
}

import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'

import { User } from '../user/user.entity'

import { BasicEntity } from 'src/base/shared/entities/basic.entity'

@Entity({ name: 'user_tokens' })
export class UserToken extends BasicEntity {
  @Column()
  userId: string

  @Column()
  refreshToken: string

  @Column()
  expiresAt: Date

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User
}

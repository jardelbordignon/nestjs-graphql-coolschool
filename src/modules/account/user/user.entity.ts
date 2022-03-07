import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'

import { Student } from '../../student/student.entity'

import { SoftEntity } from 'src/base/shared/entities/soft.entity'

import { hashPasswordTransform } from './user.hash-password-transform'

@Entity({ name: 'users' })
export class User extends SoftEntity {
  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: true, transformer: hashPasswordTransform })
  password?: string

  @OneToOne(() => Student)
  @JoinColumn()
  student: Student
}

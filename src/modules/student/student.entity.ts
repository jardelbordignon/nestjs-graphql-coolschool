import { Column, Entity, ManyToMany } from 'typeorm'

import { SoftEntity } from 'src/base/shared/entities/soft.entity'
import { Discipline } from 'src/modules/disciplines/entities/discipline.entity'

@Entity({ name: 'students' })
export class Student extends SoftEntity {
  @Column()
  name: string

  @Column()
  key: string

  @ManyToMany(() => Discipline, (disciplines) => disciplines.students, {
    nullable: true,
  })
  disciplines: Discipline[]
}

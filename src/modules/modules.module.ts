import { Module } from '@nestjs/common'

import { AccountModule } from './account/account.module'
import { ContentsModule } from './contents/contents.module'
import { DisciplinesModule } from './disciplines/disciplines.module'
import { LessonsModule } from './lessons/lessons.module'
import { StudentModule } from './student/student.module'

@Module({
  imports: [
    AccountModule,
    ContentsModule,
    DisciplinesModule,
    LessonsModule,
    StudentModule,
  ],
})
export class ModulesModule {}

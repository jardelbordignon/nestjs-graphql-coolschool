import { Module } from '@nestjs/common'

import { AuthModule } from './auth/auth.module'
import { ContentsModule } from './contents/contents.module'
import { DisciplinesModule } from './disciplines/disciplines.module'
import { LessonsModule } from './lessons/lessons.module'
import { StudentModule } from './student/student.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    AuthModule,
    ContentsModule,
    DisciplinesModule,
    LessonsModule,
    StudentModule,
    UserModule,
  ],
})
export class ModulesModule {}

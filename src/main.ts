import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './base/app/app.module'

const PORT = Number(process.env.API_PORT || 3001)

async function bootstrap(): Promise<void> {
  const logger = new Logger('Bootstrap')

  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  await app.listen(PORT).then(() => {
    logger.log(`🚀 Server started on port ${PORT}`)
  })
}

bootstrap()

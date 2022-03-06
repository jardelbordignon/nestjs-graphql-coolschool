import { join } from 'path'

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { DatabaseModule } from 'src/base/database/database.module'
import { ModulesModule } from 'src/modules/modules.module'

import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    ModulesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: process.env.NODE_ENV === 'development',
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],

  providers: [AppService],
})
export class AppModule {}

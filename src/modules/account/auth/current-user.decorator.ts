import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { UserContext } from './auth.type'

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext<UserContext>().req.user
  }
)

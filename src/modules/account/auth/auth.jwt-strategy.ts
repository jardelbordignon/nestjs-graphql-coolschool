import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { User } from '../user/user.entity'
import { UserService } from '../user/user.service'

interface IPayload {
  sub: User['id']
  name: string
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private service: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    })
  }

  async validate(payload: IPayload) {
    const user = await this.service.getById(payload.sub)

    if (!user) throw new UnauthorizedException('Unauthorized')

    return user
  }
}

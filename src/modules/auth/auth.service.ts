import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcryptjs'

import { UserDTO } from '../user/user.dto'
import { UserService } from '../user/user.service'

import { AuthInputDTO } from './auth.dto'
import { AuthResponse, AuthenticatedUser } from './auth.type'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login({ email, password }: AuthInputDTO): Promise<AuthResponse> {
    // const [user] = await this.userService.query({ filter: { email: { eq: email } }, paging: { limit: 1 } })
    const user = await this.userService.findByEmail(email)

    if (!user)
      throw new UnauthorizedException('Email and password do not match')

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch)
      throw new UnauthorizedException('Email and password do not match')

    const payload = { username: user.name, sub: user.id }

    const accessToken = await this.jwtService.signAsync(payload)
    const refreshToken = 'refreshToken'

    const tokens = { accessToken, refreshToken }

    return { user, tokens }
  }

  async currentUser(authUser: AuthenticatedUser): Promise<UserDTO> {
    try {
      const user = await this.userService.getById(authUser.id)
      return user
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}

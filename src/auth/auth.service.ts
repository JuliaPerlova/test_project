import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { TokensService } from 'src/tokens/tokens.service';
import { UserDTO } from 'src/users/interfaces/user.dto';
import { UsersService } from 'src/users/users.service';
import { addDays } from 'date-fns';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly tokenService: TokensService,
    private readonly jwtService: JwtService,
  ) {}

  private accessToken(id: string, options?: object) {
    const payload = {
      uId: id,
    };

    return this.jwtService.sign(payload, options);
  }

  async login(email: string, password: string) {
    const [user] = await this.userService.findUserByEmail(email);

    if (!user) {
      throw new HttpException(
        'User with this email does not exist in system',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new HttpException('Wrong password', HttpStatus.FORBIDDEN);
    }

    const accessToken = this.accessToken(user.id);
    const token = await this.tokenService.createToken({
      author: user,
      token: accessToken,
      expireDateTime: addDays(Date.now(), 1),
    });

    return { id: user.id, token: token.token };
  }

  async signUp(createUserDto: UserDTO) {
    const user = await this.userService.createUser(createUserDto);
    const accessToken = this.accessToken(user.id);
    const token = await this.tokenService.createToken({
      author: user,
      token: accessToken,
      expireDateTime: addDays(Date.now(), 1),
    });

    return { id: user.id, token: token.token };
  }

  async logout(token: string) {
    await this.tokenService.deleteToken(token);
    return true;
  }
}

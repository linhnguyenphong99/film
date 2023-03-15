import { Injectable, Inject } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    constructor(
        readonly usersService: UserService
    ) {}

  async validateUser(username: number, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

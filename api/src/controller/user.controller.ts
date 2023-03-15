import { Controller, Get } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  getHello(): Promise<any> {
    return this.userService.findAll();
  }
}

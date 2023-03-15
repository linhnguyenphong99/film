import { Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  getHello(): Promise<any> {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}

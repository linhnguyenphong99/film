import { Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/service/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller()
export class UserController {
  constructor(
      private readonly authService: AuthService,
      private userService: UserService
    ) {}


  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/user')
  async create(@Request() req) {
    return this.userService.create(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users')
  getProfile() {
    return this.userService.findAll();
  }
}

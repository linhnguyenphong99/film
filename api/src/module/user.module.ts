import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserSchema } from 'src/schema/user.schema';
import { AuthService } from 'src/service/auth.service';
import { AuthModule } from './auth.module';
import { UsersRepository } from 'src/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UserService, UsersRepository],
  exports: [UserService],
})
export class UserModule {}

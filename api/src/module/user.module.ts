import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserSchema } from 'src/schema/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema]), ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

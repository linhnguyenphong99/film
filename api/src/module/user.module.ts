import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../service/user.service';
import { UserSchema } from 'src/schema/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

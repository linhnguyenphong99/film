import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from 'src/auth/local.strategy';
import { AuthService } from 'src/service/auth.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}

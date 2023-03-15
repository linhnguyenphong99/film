import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User } from './entity/user.entity';
import { UserModule } from './module/user.module';
import { AuthModule } from './module/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'film',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}

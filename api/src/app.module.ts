import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User } from './entity/user.entity';
import { UserModule } from './module/user.module';
import { AuthModule } from './module/auth.module';
import { UserController } from './controller/user.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_USERNAME),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABSE,
      entities: [User],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [UserController]
})
export class AppModule {}

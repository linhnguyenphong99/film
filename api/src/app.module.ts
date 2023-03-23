import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { AuthModule } from './module/auth.module';
import { UserController } from './controller/user.controller';
import { ConfigModule } from '@nestjs/config';
import { UserSchema } from './schema/user.schema';
import entities from './entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserSchema]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_USERNAME),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABSE,
      entities: entities,
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    AuthModule,
  ],
  providers: [UserModule],
  controllers: [UserController]
})
export class AppModule {}

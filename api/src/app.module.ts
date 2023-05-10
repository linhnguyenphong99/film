import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { AuthModule } from './module/auth.module';
import { UserController } from './controller/user.controller';
import { ConfigModule } from '@nestjs/config';
import entities from './entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:'postgres://linhnguyenphong99:zVWavN8R1Quf@ep-weathered-glade-501739.ap-southeast-1.aws.neon.tech/neondb?ssl=true',
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

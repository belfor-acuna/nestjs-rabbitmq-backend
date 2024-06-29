import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AidModule } from './aid/aid.module';
import { Aid } from "./aid/aid.entity";
import { UserModule } from './user/user.module';
import { User } from "./user/user.entity";
import { Service } from "./service/service.entity";
import { ServiceModule } from "./service/service.module";
import { SecurityModule } from './security/security.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Aid, User, Service],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    AidModule,
    UserModule,
    ServiceModule,
    SecurityModule,
    RabbitmqModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

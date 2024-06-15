import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WardModule } from './ward/ward.module';
import { ApplicantModule } from './applicant/applicant.module';
import { AidModule } from './aid/aid.module';
import { Ward } from "./ward/ward.entity";
import { Aid } from "./aid/aid.entity";
import { Applicant } from "./applicant/applicant.entity";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Ward, Aid, Applicant],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    WardModule,
    ApplicantModule,
    AidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

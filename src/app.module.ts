import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WardModule } from './ward/ward.module';
import { ApplicantModule } from './applicant/applicant.module';
import { AidModule } from './aid/aid.module';
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      entities: [],
      synchronize: true,
    }),
    WardModule,
    ApplicantModule,
    AidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

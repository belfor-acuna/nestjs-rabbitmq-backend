import { Module } from "@nestjs/common";
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
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      entities: [Ward,Aid,Applicant],
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

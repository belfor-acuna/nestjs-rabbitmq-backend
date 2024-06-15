import { Module } from "@nestjs/common";
import { ApplicantController } from "./applicant.controller";
import { ApplicantService } from "./applicant.service";
import { Applicant } from "./applicant.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
  imports:[TypeOrmModule.forFeature([Applicant])],
  controllers: [ApplicantController],
  providers: [ApplicantService],
})
export class ApplicantModule {}

import { Module } from '@nestjs/common';
import { ApplicantController } from './applicant.controller';
import { ApplicantService } from './applicant.service';

@Module({
  controllers: [ApplicantController],
  providers: [ApplicantService]
})
export class ApplicantModule {}

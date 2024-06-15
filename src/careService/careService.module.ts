import { Module } from '@nestjs/common';
import { CareServiceController } from './careService.controller';
import { CareServiceService } from './careService.service';

@Module({
  imports: [],
  controllers: [CareServiceController],
  providers: [CareServiceService],
})
export class CareServiceModule {}

import { Module } from '@nestjs/common';
import { AidController } from './aid.controller';
import { AidService } from './aid.service';

@Module({
  controllers: [AidController],
  providers: [AidService]
})
export class AidModule {}

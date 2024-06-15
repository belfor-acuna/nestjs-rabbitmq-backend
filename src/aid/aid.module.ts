import { Module } from '@nestjs/common';
import { AidController } from './aid.controller';
import { AidService } from './aid.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aid } from './aid.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Aid])],
  controllers: [AidController],
  providers: [AidService]
})
export class AidModule {}

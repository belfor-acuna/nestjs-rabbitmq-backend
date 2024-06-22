import { Module } from '@nestjs/common';
import { AidController } from './aid.controller';
import { AidService } from './aid.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aid } from './aid.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[TypeOrmModule.forFeature([Aid]),UserModule],
  controllers: [AidController],
  providers: [AidService]
})
export class AidModule {}

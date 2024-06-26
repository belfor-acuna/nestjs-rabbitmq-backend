import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { UserModule } from 'src/user/user.module';
import { AidModule } from 'src/aid/aid.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';

@Module({
  imports:[UserModule, AidModule, TypeOrmModule.forFeature([Service])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}

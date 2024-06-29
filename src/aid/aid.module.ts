import { Module, forwardRef } from '@nestjs/common';
import { AidController } from './aid.controller';
import { AidService } from './aid.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aid } from './aid.entity';
import { UserModule } from 'src/user/user.module';
import { RabbitmqModule } from 'src/rabbitmq/rabbitmq.module';

@Module({
  imports:[TypeOrmModule.forFeature([Aid]),UserModule, forwardRef(() => RabbitmqModule)],
  controllers: [AidController],
  providers: [AidService],
  exports:[AidService]
})
export class AidModule {}

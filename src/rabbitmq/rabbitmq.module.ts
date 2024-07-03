import { Module, forwardRef } from "@nestjs/common";
import { RabbitmqController } from "./rabbitmq.controller";
import { RabbitmqService } from "./rabbitmq.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AidModule } from "src/aid/aid.module";
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: "AID_REQUESTS_SERVICE",
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${configService.get<string>('RABBITMQ_USER')}:${configService.get<string>('RABBITMQ_PASSWORD')}@${configService.get<string>('RABBITMQ_HOST')}:${configService.get<number>('RABBITMQ_PORT')}`,
            ],
            queue: "aid_requests_queue",
            exchange:{
              name:'request',
              type:'direct'
            },
          },
        }),
        inject: [ConfigService],
      },
      {
        name: "AID_ACCEPTED_SERVICE",
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${configService.get<string>('RABBITMQ_USER')}:${configService.get<string>('RABBITMQ_PASSWORD')}@${configService.get<string>('RABBITMQ_HOST')}:${configService.get<number>('RABBITMQ_PORT')}`,
            ],
            queue: "aid_accept_queue",
            exchange:{
              name: 'accept',
              type:'direct'
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
    forwardRef(() => AidModule),
  ],
  controllers: [RabbitmqController],
  providers: [RabbitmqService],
  exports: [RabbitmqService],
})
export class RabbitmqModule {}

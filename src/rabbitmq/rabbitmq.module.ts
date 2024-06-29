import { Module, forwardRef } from "@nestjs/common";
import { RabbitmqController } from "./rabbitmq.controller";
import { RabbitmqService } from "./rabbitmq.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AidModule } from "src/aid/aid.module";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AID_REQUESTS_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://localhost:5674"],
          queue: "aid requests queue",
        },
      },
    ]),forwardRef(() => AidModule)
  ],
  controllers: [RabbitmqController],
  providers: [RabbitmqService],
  exports:[RabbitmqService]
})
export class RabbitmqModule {}

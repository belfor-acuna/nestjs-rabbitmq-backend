import { ClientProxy } from '@nestjs/microservices';
import { Aid } from 'src/aid/aid.entity';
export declare class RabbitmqService {
    private rabbitClient;
    constructor(rabbitClient: ClientProxy);
    placeAidRequest(aidRequest: Aid): {
        message: string;
    };
}

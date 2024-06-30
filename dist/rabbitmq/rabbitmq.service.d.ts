import { ClientProxy } from '@nestjs/microservices';
import { Aid } from 'src/aid/aid.entity';
import { RequestDTO } from 'src/aid/dto/aidrequest.dto';
export declare class RabbitmqService {
    private rabbitClient;
    constructor(rabbitClient: ClientProxy);
    placeAidRequest(aidRequest: Aid): {
        message: string;
        request: RequestDTO;
    };
}

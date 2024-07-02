import { ClientProxy } from '@nestjs/microservices';
import { Aid } from 'src/aid/aid.entity';
import { RequestDTO } from 'src/aid/dto/aidrequest.dto';
export declare class RabbitmqService {
    private rabbitRequestClient;
    private rabbitAcceptClient;
    constructor(rabbitRequestClient: ClientProxy, rabbitAcceptClient: ClientProxy);
    placeAidRequest(aidRequest: Aid): {
        message: string;
        request: RequestDTO;
    };
    acceptRequest(acceptedAid: Aid): {
        message: string;
        aid: Aid;
    };
}

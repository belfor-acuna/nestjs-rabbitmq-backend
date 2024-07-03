import { ClientProxy } from '@nestjs/microservices';
import { Aid } from 'src/aid/aid.entity';
import { RequestDTO } from 'src/aid/dto/aidrequest.dto';
export declare class RabbitmqService {
    private rabbitRequestClient;
    private rabbitAcceptClient;
    private readonly logger;
    constructor(rabbitRequestClient: ClientProxy, rabbitAcceptClient: ClientProxy);
    placeAidRequest(aidRequest: Aid, wardId: number): Promise<{
        message: string;
        request: RequestDTO;
    }>;
    acceptRequest(acceptedAid: Aid): Promise<{
        message: string;
        aid: Aid;
    }>;
}

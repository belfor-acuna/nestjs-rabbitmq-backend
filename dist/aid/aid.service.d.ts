import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Aid } from "./aid.entity";
import { RabbitmqService } from "src/rabbitmq/rabbitmq.service";
import { RequestDTO } from "./dto/aidrequest.dto";
export declare class AidService {
    private userService;
    private rabbitMqService;
    private aidsRepository;
    constructor(userService: UserService, rabbitMqService: RabbitmqService, aidsRepository: Repository<Aid>);
    createAidRequest(applicantId: number, wardId: number, service: string): Promise<{
        message: string;
        request: RequestDTO;
    }>;
    findPendingAidsForWard(wardId: number): Promise<RequestDTO[]>;
    acceptAidRequest(aidId: number, wardId: number): Promise<Aid>;
    rejectAidRequest(aidId: number, wardId: number): Promise<Aid>;
    finishAid(aidId: number, userId: number): Promise<Aid>;
    findAid(aidId: number): Promise<Aid>;
}

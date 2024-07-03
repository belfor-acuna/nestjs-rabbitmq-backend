import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Aid } from "./aid.entity";
import { RabbitmqService } from "src/rabbitmq/rabbitmq.service";
import { RequestDTO } from "./dto/aidrequest.dto";
import { UserDto } from "src/user/dto/user.dto";
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
    findAcceptedAid(aidId: number): Promise<Aid>;
    findFinishedAidsApplicant(applicantId: number): Promise<UserDto[]>;
    findFinishedAidsWard(wardId: number): Promise<UserDto[]>;
    acceptAidRequest(aidId: number, wardId: number): Promise<{
        message: string;
        aid: Aid;
    }>;
    rejectAidRequest(aidId: number, wardId: number): Promise<Aid>;
    finishAid(aidId: number, userId: number): Promise<Aid>;
    findAid(aidId: number): Promise<Aid>;
}

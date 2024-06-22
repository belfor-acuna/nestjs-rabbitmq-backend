import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Aid } from "./aid.entity";
export declare class AidService {
    private userService;
    private aidsRepository;
    constructor(userService: UserService, aidsRepository: Repository<Aid>);
    createAidRequest(applicantId: number, wardId: number, service: string): Promise<Aid>;
    findPendingAidsForWard(wardId: number): Promise<Aid[]>;
    acceptAidRequest(aidId: number, wardId: number): Promise<Aid>;
    rejectAidRequest(aidId: number, wardId: number): Promise<Aid>;
    finishAid(aidId: number, userId: number): Promise<Aid>;
    findAid(aidId: number): Promise<Aid>;
}

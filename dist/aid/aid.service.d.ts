import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Aid } from "./aid.entity";
export declare class AidService {
    private userService;
    private aidsRepository;
    constructor(userService: UserService, aidsRepository: Repository<Aid>);
    createAidRequest(applicantId: number, wardId: number, service: string): Promise<Aid>;
    findPendingAidsForWard(wardId: number): Promise<Aid[]>;
}

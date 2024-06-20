import { AidService } from "./aid.service";
import { CreateAidDto } from "./dto/aid.dto";
export declare class AidController {
    private aidService;
    constructor(aidService: AidService);
    requestAid(req: any, createAidDto: CreateAidDto): Promise<import("./aid.entity").Aid>;
    getPendingAids(req: any): Promise<{
        success: boolean;
        pendingAids: import("./aid.entity").Aid[];
    }>;
    catch(error: any): {
        success: boolean;
        error: any;
    };
}

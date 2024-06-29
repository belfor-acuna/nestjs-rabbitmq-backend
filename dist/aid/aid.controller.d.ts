import { AidService } from "./aid.service";
import { CreateAidDto } from "./dto/aid.dto";
export declare class AidController {
    private aidService;
    constructor(aidService: AidService);
    requestAid(req: any, createAidDto: CreateAidDto): Promise<{
        message: string;
    }>;
    getPendingAids(req: any): Promise<{
        success: boolean;
        pendingAids: import("./aid.entity").Aid[];
    }>;
    catch(error: any): {
        success: boolean;
        error: any;
    };
    acceptPendingAid(aidId: number, req: any): Promise<import("./aid.entity").Aid>;
    rejectPendingAid(aidId: number, req: any): Promise<import("./aid.entity").Aid>;
    finishAid(aidId: number, req: any): Promise<import("./aid.entity").Aid>;
    getAid(aidId: number): Promise<import("./aid.entity").Aid>;
}

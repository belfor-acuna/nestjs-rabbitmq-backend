import { AidService } from "./aid.service";
import { CreateAidDto } from "./dto/aid.dto";
export declare class AidController {
    private aidService;
    constructor(aidService: AidService);
    requestAid(req: any, createAidDto: CreateAidDto): Promise<{
        message: string;
        request: import("./dto/aidrequest.dto").RequestDTO;
    }>;
    getPendingAids(req: any): Promise<{
        success: boolean;
        pendingAids: import("./dto/aidrequest.dto").RequestDTO[];
    }>;
    catch(error: any): {
        success: boolean;
        error: any;
    };
    getFinishedAidApplicant(req: any): Promise<import("../user/dto/user.dto").UserDto[]>;
    getFnishedAidWard(req: any): Promise<import("../user/dto/user.dto").UserDto[]>;
    getAcceptedAid(aidId: number): Promise<import("./aid.entity").Aid>;
    acceptPendingAid(aidId: number, req: any): Promise<{
        message: string;
        aid: import("./aid.entity").Aid;
    }>;
    rejectPendingAid(aidId: number, req: any): Promise<import("./aid.entity").Aid>;
    finishAid(aidId: number, req: any): Promise<import("./aid.entity").Aid>;
    getAid(aidId: number): Promise<import("./aid.entity").Aid>;
}

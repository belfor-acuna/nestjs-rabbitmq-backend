import { User } from "src/user/user.entity";
import { AidStatus } from "./enum/status.enum";
export declare class Aid {
    id: number;
    cost: number;
    duration: string;
    service: string;
    address: string;
    status: AidStatus;
    ward: User;
    applicant: User;
}

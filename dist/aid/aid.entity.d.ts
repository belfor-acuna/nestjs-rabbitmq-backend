import { Ward } from "../ward/ward.entity";
import { Applicant } from "../applicant/applicant.entity";
export declare class Aid {
    id_aid: number;
    cost: number;
    duration: string;
    address: string;
    ward: Ward;
    applicant: Applicant;
}

import { Aid } from "src/aid/aid.entity";
export declare class Applicant {
    id: number;
    firstNAme: string;
    lastName: string;
    age: number;
    address: string;
    phoneNumber: string;
    email: string;
    aids: Aid[];
}

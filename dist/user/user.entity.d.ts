import { Aid } from 'src/aid/aid.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    phoneNumber: string;
    email: string;
    role: string;
    services: string[];
    aidAsWard: Aid[];
    aidAsApplicant: Aid[];
}

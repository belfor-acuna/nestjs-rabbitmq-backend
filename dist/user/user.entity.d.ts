import { Aid } from 'src/aid/aid.entity';
import { ROLES } from './roles/roles.enum';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    password: string;
    age: number;
    address: string;
    phoneNumber: string;
    pricePerHour: number;
    email: string;
    roles: ROLES[];
    services: string[];
    aidAsWard: Aid[];
    aidAsApplicant: Aid[];
}

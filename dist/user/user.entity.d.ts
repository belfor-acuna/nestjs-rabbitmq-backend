import { Aid } from 'src/aid/aid.entity';
import { ROLES } from './roles/roles.enum';
import { Service } from 'src/service/service.entity';
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
    services: Service[];
    aidAsWard: Aid[];
    aidAsApplicant: Aid[];
}

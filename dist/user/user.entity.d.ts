import { Aid } from 'src/aid/aid.entity';
import { ROLES } from './roles/roles.enum';
import { Service } from 'src/service/service.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    salt: string;
    hash: string;
    age: number;
    address: string;
    phoneNumber: string;
    pricePerHour: number;
    email: string;
    latitude: number;
    longitude: number;
    roles: ROLES[];
    services: Service[];
    aidAsWard: Aid[];
    aidAsApplicant: Aid[];
}

import { AidStatus } from '../enum/status.enum';
import { Service } from 'src/service/service.entity';
export declare class RequestDTO {
    id: number;
    userId: number;
    firstName: string;
    fullName: string;
    address: string;
    latitude: number;
    longitude: number;
    servicesRequested: Service[];
    status: AidStatus;
    description: string;
}

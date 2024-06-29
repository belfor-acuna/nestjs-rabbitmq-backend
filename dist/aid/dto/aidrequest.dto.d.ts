import { AidStatus } from '../enum/status.enum';
export declare class RequestDTO {
    id: number;
    firstName: string;
    fullName: string;
    address: string;
    latitude: number;
    longitude: number;
    servicesRequested: string[];
    status: AidStatus;
    description: string;
}

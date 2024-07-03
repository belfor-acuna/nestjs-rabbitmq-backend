import { Service } from "src/service/service.entity";
export declare class UserDto {
    id: number;
    firstName: string;
    fullName: string;
    description: string;
    address: string;
    photoUrl: string;
    servicesRequested: Service[];
    latitude: number;
    longitude: number;
}

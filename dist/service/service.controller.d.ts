import { ServiceService } from './service.service';
import { Service } from './service.entity';
import { CreateServiceDto } from './dto/serviceDto';
import { User } from 'src/user/user.entity';
export declare class ServiceController {
    private serviceService;
    constructor(serviceService: ServiceService);
    findService(id: number): Promise<Service>;
    findAllServices(): Promise<Service[]>;
    newService(serviceDto: CreateServiceDto): Promise<Service>;
    addServiceToUser(req: any, serviceId: number): Promise<User>;
}

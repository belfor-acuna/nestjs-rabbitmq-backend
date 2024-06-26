import { Service } from "./service.entity";
import { Repository } from "typeorm";
import { UserService } from "src/user/user.service";
import { CreateServiceDto } from "./dto/serviceDto";
import { User } from "src/user/user.entity";
export declare class ServiceService {
    private serviceRepository;
    private usersService;
    constructor(serviceRepository: Repository<Service>, usersService: UserService);
    findAll(): Promise<Service[]>;
    findOne(id: number): Promise<Service>;
    createService(createServiceDto: CreateServiceDto): Promise<Service>;
    addServiceToUser(userId: number, serviceId: number): Promise<User>;
}

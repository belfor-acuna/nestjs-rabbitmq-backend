import { User } from "./user.entity";
import { RegisterAuthDto } from "src/auth/dto/authDto";
import { SecurityService } from "src/security/security.service";
import { Repository } from "typeorm";
import { WardDto } from "./dto/ward.dto";
export declare class UserService {
    private usersRepository;
    private securityService;
    updateCoordinates(latitude: number, longitude: number, userId: number): Promise<User>;
    constructor(usersRepository: Repository<User>, securityService: SecurityService);
    findAll(): Promise<WardDto[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    signUpWard(CreateAuthDto: RegisterAuthDto): Promise<User>;
    signUpApplicant(CreateAuthDto: RegisterAuthDto): Promise<User>;
    saveUser(User: User): Promise<User>;
}

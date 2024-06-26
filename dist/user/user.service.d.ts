import { User } from "./user.entity";
import { RegisterAuthDto } from "src/auth/dto/authDto";
import { SecurityService } from "src/security/security.service";
import { Repository } from "typeorm";
export declare class UserService {
    private usersRepository;
    private securityService;
    constructor(usersRepository: Repository<User>, securityService: SecurityService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    signUpWard(CreateAuthDto: RegisterAuthDto): Promise<User>;
    signUpApplicant(CreateAuthDto: RegisterAuthDto): Promise<User>;
    saveUser(User: User): Promise<User>;
}

import { User } from "./user.entity";
import { Repository } from "typeorm";
import { RegisterAuthDto } from "src/auth/dto/authDto";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    signUpWard(CreateAuthDto: RegisterAuthDto): Promise<User>;
    signUpApplicant(CreateAuthDto: RegisterAuthDto): Promise<User>;
}

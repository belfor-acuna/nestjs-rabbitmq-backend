import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateAuthDto } from "src/auth/dto/authDto";
import { UserDto } from "./dto/user.dto";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<UserDto>;
    findOneByEmail(email: string): Promise<User | null>;
    signUpWard(CreateAuthDto: CreateAuthDto): Promise<User>;
    signUpApplicant(CreateAuthDto: CreateAuthDto): Promise<User>;
}

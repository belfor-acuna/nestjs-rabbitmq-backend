import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateAuthDto } from "src/auth/dto/authDto";
import { ROLES } from "./roles/roles.enum";
import { UserDto } from "./dto/user.dto";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({id})
    if (!user){
      throw new Error(`User with id ${id} not found :c`)
    }
    return user;
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async signUpWard(CreateAuthDto: CreateAuthDto): Promise<User> {
    const user = new User();
    user.email = CreateAuthDto.email;
    user.password = CreateAuthDto.password;
    user.roles = [ROLES.Ward];
    return this.usersRepository.save(user);
  }

  async signUpApplicant(CreateAuthDto: CreateAuthDto): Promise<User> {
    const user = new User();
    user.email = CreateAuthDto.email;
    user.password = CreateAuthDto.password;
    user.roles = [ROLES.Applicant];
    return this.usersRepository.save(user);
  }
}

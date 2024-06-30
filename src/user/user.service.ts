import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { RegisterAuthDto } from "src/auth/dto/authDto";
import { ROLES } from "./roles/roles.enum";
import { SecurityService } from "src/security/security.service";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  async updateCoordinates(latitude: number, longitude: number, userId: number) {
    const user = await this.findOne(userId);
    user.latitude = latitude;
    user.longitude = longitude;
    return this.usersRepository.save(user);
  }
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private securityService: SecurityService
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ["services"],
    });
    if (!user) {
      throw new Error(`User with id ${id} not found :c`);
    }
    return user;
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async signUpWard(CreateAuthDto: RegisterAuthDto): Promise<User> {
    const user = new User();
    user.email = CreateAuthDto.email;
    user.salt = await this.securityService.generateSalt();
    user.hash = await this.securityService.generateHash(
      CreateAuthDto.password,
      user.salt
    );
    user.roles = [ROLES.Ward];
    user.firstName = CreateAuthDto.firstName;
    user.lastName = CreateAuthDto.lastName;
    user.services = [];
    return this.usersRepository.save(user);
  }

  async signUpApplicant(CreateAuthDto: RegisterAuthDto): Promise<User> {
    const user = new User();
    user.email = CreateAuthDto.email;
    user.salt = await this.securityService.generateSalt();
    user.hash = await this.securityService.generateHash(
      CreateAuthDto.password,
      user.salt
    );
    user.roles = [ROLES.Applicant];
    user.firstName = CreateAuthDto.firstName;
    user.lastName = CreateAuthDto.lastName;
    user.services = [];
    return this.usersRepository.save(user);
  }

  async saveUser(User: User): Promise<User> {
    return this.usersRepository.save(User);
  }
}

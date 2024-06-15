import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from 'src/auth/dto/authDto';
import { ROLES } from './roles/roles.enum';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }

    findOne(id:number): Promise<User | null>{
        return this.usersRepository.findOneBy({id})
    }

    findOneByEmail(email:string): Promise <User | null>{
        return this.usersRepository.findOneBy({email})
    }


  async signUpWard(CreateAuthDto: CreateAuthDto): Promise<User> {
    const user = new User();
    user.email = CreateAuthDto.email;
    user.password = CreateAuthDto.password;
    user.role = [ROLES.Ward]
    return this.usersRepository.save(user);
  }

}

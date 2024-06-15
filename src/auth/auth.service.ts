import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { CreateAuthDto } from "./dto/authDto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(
    email: string,
    pass: string
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    if(user?.password !== pass){
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email:user.email};
    return{
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

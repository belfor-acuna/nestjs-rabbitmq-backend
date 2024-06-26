import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SecurityService } from "src/security/security.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private securityService: SecurityService
  ) {}
  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    const hash = await this.securityService.generateHash(pass,user.salt);
    if (user.hash !== hash) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.id, email: user.email, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

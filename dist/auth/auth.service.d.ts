import { JwtService } from "@nestjs/jwt";
import { SecurityService } from "src/security/security.service";
import { UserService } from "src/user/user.service";
export declare class AuthService {
    private usersService;
    private jwtService;
    private securityService;
    constructor(usersService: UserService, jwtService: JwtService, securityService: SecurityService);
    signIn(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}

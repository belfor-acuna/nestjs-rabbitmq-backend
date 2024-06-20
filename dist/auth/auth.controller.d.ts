import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/authDto';
import { UserService } from 'src/user/user.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signIn(signInDto: CreateAuthDto): Promise<{
        access_token: string;
    }>;
    getMe(req: any): any;
    registerWard(signupDto: CreateAuthDto): Promise<import("../user/user.entity").User>;
}

import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { RegisterAuthDto, LoginAuthDto } from './dto/authDto';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signIn(signInDto: LoginAuthDto): Promise<{
        access_token: string;
    }>;
    getMe(req: any): Promise<import("../user/user.entity").User>;
    registerWard(signupDto: RegisterAuthDto): Promise<import("../user/user.entity").User>;
    registerApplicant(signupDto: RegisterAuthDto): Promise<import("../user/user.entity").User>;
}

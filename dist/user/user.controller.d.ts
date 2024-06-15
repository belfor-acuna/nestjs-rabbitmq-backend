import { UserService } from './user.service';
export declare class UserController {
    private readonly appService;
    constructor(appService: UserService);
    getHello(): string;
}

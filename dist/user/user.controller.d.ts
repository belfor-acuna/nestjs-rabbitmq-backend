import { UserService } from "./user.service";
import { User } from "./user.entity";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findUser(id: number): Promise<User>;
    getAll(): Promise<User[]>;
}

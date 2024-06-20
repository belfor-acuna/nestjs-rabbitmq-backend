import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findUser(id: number): Promise<UserDto>;
    getAll(): Promise<import("./user.entity").User[]>;
}

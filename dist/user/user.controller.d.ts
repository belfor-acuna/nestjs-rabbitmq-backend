import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateCoordsDto } from "./dto/coords.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findUser(id: number): Promise<User>;
    getAll(): Promise<User[]>;
    updateCoordinates(createCoordsDto: CreateCoordsDto, req: any): Promise<User>;
}

import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateCoordsDto } from "./dto/coords.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findUser(id: number): Promise<User>;
    getWards(): Promise<import("./dto/ward.dto").WardDto[]>;
    updateCoordinates(createCoordsDto: CreateCoordsDto, req: any): Promise<User>;
}

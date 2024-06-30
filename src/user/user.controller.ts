import { Body, Controller, Get, Param, Patch, Request } from "@nestjs/common";
import { ROLES } from "./roles/roles.enum";
import { Roles } from "./roles/roles.decorator";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateCoordsDto } from "./dto/coords.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Roles(ROLES.Applicant, ROLES.Ward)
  @Get("/one/:id")
  async findUser(@Param("id") id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Roles(ROLES.Applicant, ROLES.Ward)
  @Get("wards")
  async getWards() {
    return this.userService.findAll();
  }

  @Roles(ROLES.Applicant, ROLES.Ward)
  @Patch('coordinates')
  async updateCoordinates(@Body() createCoordsDto: CreateCoordsDto, @Request() req){
    return this.userService.updateCoordinates(createCoordsDto.latitude, createCoordsDto.longitude, req.user.userId)
  }
}

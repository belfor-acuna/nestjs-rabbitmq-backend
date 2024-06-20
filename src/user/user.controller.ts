import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ROLES } from './roles/roles.enum';
import { Roles } from './roles/roles.decorator';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Public } from 'src/auth/guards/public.auth.decorator';

@Controller('user')
export class UserController {
    constructor (private userService:UserService){}
  @Roles(ROLES.Applicant, ROLES.Ward)
  @Get(':id')
  async findUser(@Param('id') id: number): Promise<UserDto> {
    return this.userService.findOne(id);
  }
}

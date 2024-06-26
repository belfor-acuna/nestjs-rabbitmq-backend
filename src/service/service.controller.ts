import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Request } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ROLES } from 'src/user/roles/roles.enum';
import { Service } from './service.entity';
import { Roles } from 'src/user/roles/roles.decorator';
import { CreateServiceDto } from './dto/serviceDto';
import { User } from 'src/user/user.entity';

@Controller('service')
export class ServiceController {
    constructor(private serviceService: ServiceService){}

    @Roles(ROLES.Applicant, ROLES.Ward)
    @Get('one/:id')
    async findService(@Param ('id') id:number): Promise <Service>{
        return this.serviceService.findOne(id);
    }

    @Roles(ROLES.Applicant, ROLES.Ward)
    @Get('all')
    async findAllServices(){
        return this.serviceService.findAll();
    }

    @Roles(ROLES.Ward)
    @HttpCode(HttpStatus.OK)
    @Post('new')
    async newService(@Body() serviceDto: CreateServiceDto){
        return this.serviceService.createService(serviceDto)
    }

    @Roles(ROLES.Applicant,ROLES.Ward)
    @Patch(':serviceId')
    async addServiceToUser(@Request() req, @Param('serviceId') serviceId:number): Promise<User>{
        return this.serviceService.addServiceToUser(req.user.userId,serviceId);
    }
}

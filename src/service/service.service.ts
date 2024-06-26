import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Service } from "./service.entity";
import { Repository } from "typeorm";
import { UserService } from "src/user/user.service";
import { CreateServiceDto } from "./dto/serviceDto";
import { User } from "src/user/user.entity";

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
    private usersService: UserService
  ) {}

  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.find();
  }

  async findOne(id: number): Promise<Service> {
    const service = await this.serviceRepository.findOneBy({ id });
    if (!service) {
      throw new NotFoundException(`Service with id ${id} not found :c`);
    }
    return service;
  }

  async createService(createServiceDto: CreateServiceDto):Promise<Service>{
    const tag = createServiceDto.tag
    const description = createServiceDto.description
    const duplicate = await this.serviceRepository.findOneBy({tag});
    if (duplicate){
        throw new BadRequestException(`Service already exists! look, Id: ${duplicate.id}, tag: ${duplicate.tag}`)
    }
    const service = new Service();
    service.tag = tag;
    service.description = description;
    return this.serviceRepository.save(service)
  }

  async addServiceToUser(userId: number, serviceId: number): Promise<User> {
    const user = await this.usersService.findOne(userId);
    console.log(`User: ${user.firstName}, services: ${user.services}, id: ${user.id}, incoming id: ${userId}`)
    if (!user.services.some((sv) => sv.id === serviceId)) {
      const service = await this.serviceRepository.findOneBy({ id: serviceId });
      user.services.push(service);
      return this.usersService.saveUser(user);
    }
  }
}

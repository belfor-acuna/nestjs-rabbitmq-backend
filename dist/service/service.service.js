"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const service_entity_1 = require("./service.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
let ServiceService = class ServiceService {
    constructor(serviceRepository, usersService) {
        this.serviceRepository = serviceRepository;
        this.usersService = usersService;
    }
    async findAll() {
        return await this.serviceRepository.find();
    }
    async findOne(id) {
        const service = await this.serviceRepository.findOneBy({ id });
        if (!service) {
            throw new common_1.NotFoundException(`Service with id ${id} not found :c`);
        }
        return service;
    }
    async createService(createServiceDto) {
        const tag = createServiceDto.tag;
        const description = createServiceDto.description;
        const duplicate = await this.serviceRepository.findOneBy({ tag });
        if (duplicate) {
            throw new common_1.BadRequestException(`Service already exists! look, Id: ${duplicate.id}, tag: ${duplicate.tag}`);
        }
        const service = new service_entity_1.Service();
        service.tag = tag;
        service.description = description;
        return this.serviceRepository.save(service);
    }
    async addServiceToUser(userId, serviceId) {
        const user = await this.usersService.findOne(userId);
        if (!user.services.some((sv) => sv.id === serviceId)) {
            const service = await this.serviceRepository.findOneBy({ id: serviceId });
            user.services.push(service);
            return this.usersService.saveUser(user);
        }
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_entity_1.Service)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], ServiceService);
//# sourceMappingURL=service.service.js.map
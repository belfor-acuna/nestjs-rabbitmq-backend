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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const roles_enum_1 = require("./roles/roles.enum");
const security_service_1 = require("../security/security.service");
const typeorm_2 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("./dto/user.dto");
let UserService = class UserService {
    async updateCoordinates(latitude, longitude, userId) {
        const user = await this.findOne(userId);
        user.latitude = latitude;
        user.longitude = longitude;
        return this.usersRepository.save(user);
    }
    constructor(usersRepository, securityService) {
        this.usersRepository = usersRepository;
        this.securityService = securityService;
    }
    async findAll() {
        const users = await this.usersRepository.find({
            where: { roles: roles_enum_1.ROLES.Ward },
            relations: ["services"],
        });
        return users.map((user) => {
            const wardDto = (0, class_transformer_1.plainToClass)(user_dto_1.WardDto, {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                servicios: user.services,
                descripcion: user.description,
                edad: user.age,
                disponible: true,
                ubicacion: { latitude: user.latitude, longitude: user.longitude },
                direccion: user.address,
                costoPorHora: user.pricePerHour,
                puntaje: 4.5,
                cantidadResenas: 10,
                fotoPerfil: "default_profile_picture_url",
                email: user.email,
                phoneNumber: user.phoneNumber,
            });
            return wardDto;
        });
    }
    async findOne(id) {
        const user = await this.usersRepository.findOne({
            where: { id },
            relations: ["services"],
        });
        if (!user) {
            throw new Error(`User with id ${id} not found :c`);
        }
        return user;
    }
    findOneByEmail(email) {
        return this.usersRepository.findOneBy({ email });
    }
    async signUpWard(CreateAuthDto) {
        const user = new user_entity_1.User();
        user.email = CreateAuthDto.email;
        user.salt = await this.securityService.generateSalt();
        user.hash = await this.securityService.generateHash(CreateAuthDto.password, user.salt);
        user.roles = [roles_enum_1.ROLES.Ward];
        user.firstName = CreateAuthDto.firstName;
        user.lastName = CreateAuthDto.lastName;
        user.services = [];
        return this.usersRepository.save(user);
    }
    async signUpApplicant(CreateAuthDto) {
        const user = new user_entity_1.User();
        user.email = CreateAuthDto.email;
        user.salt = await this.securityService.generateSalt();
        user.hash = await this.securityService.generateHash(CreateAuthDto.password, user.salt);
        user.roles = [roles_enum_1.ROLES.Applicant];
        user.firstName = CreateAuthDto.firstName;
        user.lastName = CreateAuthDto.lastName;
        user.services = [];
        return this.usersRepository.save(user);
    }
    async saveUser(User) {
        return this.usersRepository.save(User);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        security_service_1.SecurityService])
], UserService);
//# sourceMappingURL=user.service.js.map
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
const typeorm_2 = require("typeorm");
const roles_enum_1 = require("./roles/roles.enum");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    findAll() {
        return this.usersRepository.find();
    }
    async findOne(id) {
        return await this.usersRepository.findOneBy({ id });
    }
    findOneByEmail(email) {
        return this.usersRepository.findOneBy({ email });
    }
    async signUpWard(CreateAuthDto) {
        const user = new user_entity_1.User();
        user.email = CreateAuthDto.email;
        user.password = CreateAuthDto.password;
        user.roles = [roles_enum_1.ROLES.Ward];
        return this.usersRepository.save(user);
    }
    async signUpApplicant(CreateAuthDto) {
        const user = new user_entity_1.User();
        user.email = CreateAuthDto.email;
        user.password = CreateAuthDto.password;
        user.roles = [roles_enum_1.ROLES.Applicant];
        return this.usersRepository.save(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map
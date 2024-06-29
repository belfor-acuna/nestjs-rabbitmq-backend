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
exports.AidService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const typeorm_1 = require("typeorm");
const aid_entity_1 = require("./aid.entity");
const typeorm_2 = require("@nestjs/typeorm");
const status_enum_1 = require("./enum/status.enum");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
let AidService = class AidService {
    constructor(userService, rabbitMqService, aidsRepository) {
        this.userService = userService;
        this.rabbitMqService = rabbitMqService;
        this.aidsRepository = aidsRepository;
    }
    async createAidRequest(applicantId, wardId, service) {
        const ward = await this.userService.findOne(wardId);
        const applicant = await this.userService.findOne(applicantId);
        if (!ward) {
            throw new Error(`Ward with id ${wardId} not found`);
        }
        const aidRequest = new aid_entity_1.Aid();
        aidRequest.applicant = applicant;
        aidRequest.ward = ward;
        aidRequest.address = applicant.address || "Default Address";
        aidRequest.service = service;
        aidRequest.status = status_enum_1.AidStatus.PENDING;
        this.aidsRepository.save(aidRequest);
        return await this.rabbitMqService.placeAidRequest(aidRequest);
    }
    async findPendingAidsForWard(wardId) {
        const aids = await this.aidsRepository.find({
            where: {
                ward: { id: wardId },
                status: status_enum_1.AidStatus.PENDING,
            },
            relations: ["ward", "applicant", "applicant.services"],
        });
        const pendingAidsDTO = aids.map((aid) => ({
            id: aid.id,
            userId: aid.applicant.id,
            firstName: aid.applicant.firstName,
            fullName: `${aid.applicant.firstName} ${aid.applicant.lastName}`,
            address: aid.address,
            latitude: -38.74742,
            longitude: -72.61775,
            description: aid.applicant.description,
            status: status_enum_1.AidStatus.PENDING,
            servicesRequested: aid.applicant.services.map((service) => service.tag),
        }));
        return pendingAidsDTO;
    }
    async acceptAidRequest(aidId, wardId) {
        const ward = await this.userService.findOne(wardId);
        const aid = await this.findAid(aidId);
        if (aid.ward.id !== ward.id) {
            throw new Error(`Aid with id ${aidId} does not belong to ward with id ${wardId}`);
        }
        aid.status = status_enum_1.AidStatus.ACCEPTED;
        return this.aidsRepository.save(aid);
    }
    async rejectAidRequest(aidId, wardId) {
        const ward = await this.userService.findOne(wardId);
        const aid = await this.findAid(aidId);
        if (aid.ward.id !== ward.id) {
            throw new Error(`Aid with id ${aidId} does not belong to ward with id ${wardId}`);
        }
        aid.status = status_enum_1.AidStatus.REJECTED;
        return this.aidsRepository.save(aid);
    }
    async finishAid(aidId, userId) {
        const user = await this.userService.findOne(userId);
        const aid = await this.findAid(aidId);
        if (aid.ward.id === user.id || aid.applicant.id === user.id) {
            aid.status = status_enum_1.AidStatus.COMPLETED;
            return this.aidsRepository.save(aid);
        }
        else {
            throw new Error(`Aid with id ${aidId} does not belong to user with id ${userId}`);
        }
    }
    async findAid(aidId) {
        const aid = await this.aidsRepository
            .createQueryBuilder("aid")
            .leftJoinAndSelect("aid.ward", "ward")
            .leftJoinAndSelect("aid.applicant", "applicant")
            .where("aid.id = :id", { id: aidId })
            .getOne();
        console.log("Aid encontrado: " + JSON.stringify(aid, null, 2));
        if (!aid) {
            throw new Error(`Aid with id ${aidId} not found :c`);
        }
        return aid;
    }
};
exports.AidService = AidService;
exports.AidService = AidService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_2.InjectRepository)(aid_entity_1.Aid)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        rabbitmq_service_1.RabbitmqService,
        typeorm_1.Repository])
], AidService);
//# sourceMappingURL=aid.service.js.map
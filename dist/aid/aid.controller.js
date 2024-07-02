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
exports.AidController = void 0;
const common_1 = require("@nestjs/common");
const aid_service_1 = require("./aid.service");
const roles_decorator_1 = require("../user/roles/roles.decorator");
const roles_enum_1 = require("../user/roles/roles.enum");
const aid_dto_1 = require("./dto/aid.dto");
let AidController = class AidController {
    constructor(aidService) {
        this.aidService = aidService;
    }
    async requestAid(req, createAidDto) {
        const { wardId, service } = createAidDto;
        return await this.aidService.createAidRequest(req.user.userId, wardId, service);
    }
    async getPendingAids(req) {
        const pendingAids = await this.aidService.findPendingAidsForWard(req.user.userId);
        return { success: true, pendingAids };
    }
    catch(error) {
        return {
            success: false,
            error: error.message || "Failed to fetch pending aids",
        };
    }
    async getAcceptedAid(aidId) {
        return await this.aidService.findAcceptedAid(aidId);
    }
    async acceptPendingAid(aidId, req) {
        return await this.aidService.acceptAidRequest(aidId, req.user.userId);
    }
    async rejectPendingAid(aidId, req) {
        return await this.aidService.rejectAidRequest(aidId, req.user.userId);
    }
    async finishAid(aidId, req) {
        return await this.aidService.finishAid(aidId, req.user.userId);
    }
    async getAid(aidId) {
        return await this.aidService.findAid(aidId);
    }
};
exports.AidController = AidController;
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Applicant),
    (0, common_1.Post)("new"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aid_dto_1.CreateAidDto]),
    __metadata("design:returntype", Promise)
], AidController.prototype, "requestAid", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Ward),
    (0, common_1.Get)("ward/pending"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AidController.prototype, "getPendingAids", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Ward, roles_enum_1.ROLES.Applicant),
    (0, common_1.Get)('accepted/:aidId'),
    __param(0, (0, common_1.Param)("aidId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AidController.prototype, "getAcceptedAid", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Ward),
    (0, common_1.Patch)("ward/accept/:aidId"),
    __param(0, (0, common_1.Param)("aidId")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AidController.prototype, "acceptPendingAid", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Ward),
    (0, common_1.Patch)("ward/reject/:aidId"),
    __param(0, (0, common_1.Param)("aidId")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AidController.prototype, "rejectPendingAid", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Ward, roles_enum_1.ROLES.Applicant),
    (0, common_1.Patch)(":aidId"),
    __param(0, (0, common_1.Param)("aidId")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AidController.prototype, "finishAid", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Ward, roles_enum_1.ROLES.Applicant),
    (0, common_1.Get)(':aidId'),
    __param(0, (0, common_1.Param)('aidId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AidController.prototype, "getAid", null);
exports.AidController = AidController = __decorate([
    (0, common_1.Controller)("aid"),
    __metadata("design:paramtypes", [aid_service_1.AidService])
], AidController);
//# sourceMappingURL=aid.controller.js.map
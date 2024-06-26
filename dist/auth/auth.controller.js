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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../user/roles/roles.decorator");
const roles_enum_1 = require("../user/roles/roles.enum");
const user_service_1 = require("../user/user.service");
const auth_service_1 = require("./auth.service");
const authDto_1 = require("./dto/authDto");
const public_auth_decorator_1 = require("./guards/public.auth.decorator");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    signIn(signInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
    getMe(req) {
        return this.userService.findOne(req.user.userId);
    }
    registerWard(signupDto) {
        return this.userService.signUpWard(signupDto);
    }
    registerApplicant(signupDto) {
        return this.userService.signUpApplicant(signupDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_auth_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_1.LoginAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_enum_1.ROLES.Applicant, roles_enum_1.ROLES.Ward),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getMe", null);
__decorate([
    (0, public_auth_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('register/ward'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_1.RegisterAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerWard", null);
__decorate([
    (0, public_auth_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('register/applicant'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_1.RegisterAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerApplicant", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map
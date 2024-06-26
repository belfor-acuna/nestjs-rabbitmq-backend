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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const security_service_1 = require("../security/security.service");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, securityService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.securityService = securityService;
    }
    async signIn(email, pass) {
        const user = await this.usersService.findOneByEmail(email);
        const hash = await this.securityService.generateHash(pass, user.salt);
        if (user.hash !== hash) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { userId: user.id, email: user.email, roles: user.roles };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        security_service_1.SecurityService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
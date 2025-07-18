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
exports.Aid = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const status_enum_1 = require("./enum/status.enum");
let Aid = class Aid {
};
exports.Aid = Aid;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Aid.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Aid.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Aid.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Aid.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Aid.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: status_enum_1.AidStatus, default: status_enum_1.AidStatus.PENDING }),
    __metadata("design:type", String)
], Aid.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.aidAsWard),
    __metadata("design:type", user_entity_1.User)
], Aid.prototype, "ward", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.aidAsApplicant),
    __metadata("design:type", user_entity_1.User)
], Aid.prototype, "applicant", void 0);
exports.Aid = Aid = __decorate([
    (0, typeorm_1.Entity)()
], Aid);
//# sourceMappingURL=aid.entity.js.map
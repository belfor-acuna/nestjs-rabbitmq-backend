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
exports.Applicant = void 0;
const typeorm_1 = require("typeorm");
const aid_entity_1 = require("../aid/aid.entity");
let Applicant = class Applicant {
};
exports.Applicant = Applicant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Applicant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Applicant.prototype, "firstNAme", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Applicant.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Applicant.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Applicant.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Applicant.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Applicant.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => aid_entity_1.Aid, (aid) => aid.applicant),
    __metadata("design:type", Array)
], Applicant.prototype, "aids", void 0);
exports.Applicant = Applicant = __decorate([
    (0, typeorm_1.Entity)()
], Applicant);
//# sourceMappingURL=applicant.entity.js.map
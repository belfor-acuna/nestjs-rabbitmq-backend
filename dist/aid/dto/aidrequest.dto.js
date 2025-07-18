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
exports.RequestDTO = void 0;
const class_validator_1 = require("class-validator");
const status_enum_1 = require("../enum/status.enum");
class RequestDTO {
}
exports.RequestDTO = RequestDTO;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RequestDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RequestDTO.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RequestDTO.prototype, "wardId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDTO.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDTO.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDTO.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RequestDTO.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RequestDTO.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], RequestDTO.prototype, "servicesRequested", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(status_enum_1.AidStatus),
    __metadata("design:type", String)
], RequestDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestDTO.prototype, "description", void 0);
//# sourceMappingURL=aidrequest.dto.js.map
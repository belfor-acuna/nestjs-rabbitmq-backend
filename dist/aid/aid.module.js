"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AidModule = void 0;
const common_1 = require("@nestjs/common");
const aid_controller_1 = require("./aid.controller");
const aid_service_1 = require("./aid.service");
const typeorm_1 = require("@nestjs/typeorm");
const aid_entity_1 = require("./aid.entity");
const user_module_1 = require("../user/user.module");
const rabbitmq_module_1 = require("../rabbitmq/rabbitmq.module");
let AidModule = class AidModule {
};
exports.AidModule = AidModule;
exports.AidModule = AidModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([aid_entity_1.Aid]), user_module_1.UserModule, (0, common_1.forwardRef)(() => rabbitmq_module_1.RabbitmqModule)],
        controllers: [aid_controller_1.AidController],
        providers: [aid_service_1.AidService],
        exports: [aid_service_1.AidService]
    })
], AidModule);
//# sourceMappingURL=aid.module.js.map
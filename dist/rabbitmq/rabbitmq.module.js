"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitmqModule = void 0;
const common_1 = require("@nestjs/common");
const rabbitmq_controller_1 = require("./rabbitmq.controller");
const rabbitmq_service_1 = require("./rabbitmq.service");
const microservices_1 = require("@nestjs/microservices");
const aid_module_1 = require("../aid/aid.module");
let RabbitmqModule = class RabbitmqModule {
};
exports.RabbitmqModule = RabbitmqModule;
exports.RabbitmqModule = RabbitmqModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "AID_REQUESTS_SERVICE",
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ["amqp://localhost:5674"],
                        queue: "aid requests queue",
                    },
                },
            ]), (0, common_1.forwardRef)(() => aid_module_1.AidModule)
        ],
        controllers: [rabbitmq_controller_1.RabbitmqController],
        providers: [rabbitmq_service_1.RabbitmqService],
        exports: [rabbitmq_service_1.RabbitmqService]
    })
], RabbitmqModule);
//# sourceMappingURL=rabbitmq.module.js.map
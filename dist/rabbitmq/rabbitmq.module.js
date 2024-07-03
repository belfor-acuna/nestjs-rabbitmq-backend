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
const config_1 = require("@nestjs/config");
let RabbitmqModule = class RabbitmqModule {
};
exports.RabbitmqModule = RabbitmqModule;
exports.RabbitmqModule = RabbitmqModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: "AID_REQUESTS_SERVICE",
                    imports: [config_1.ConfigModule],
                    useFactory: async (configService) => ({
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: [
                                `amqp://${configService.get('RABBITMQ_USER')}:${configService.get('RABBITMQ_PASSWORD')}@${configService.get('RABBITMQ_HOST')}:${configService.get('RABBITMQ_PORT')}`,
                            ],
                            queue: "aid_requests_queue",
                            exchange: {
                                name: 'request',
                                type: 'direct'
                            },
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
                {
                    name: "AID_ACCEPTED_SERVICE",
                    imports: [config_1.ConfigModule],
                    useFactory: async (configService) => ({
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: [
                                `amqp://${configService.get('RABBITMQ_USER')}:${configService.get('RABBITMQ_PASSWORD')}@${configService.get('RABBITMQ_HOST')}:${configService.get('RABBITMQ_PORT')}`,
                            ],
                            queue: "aid_accept_queue",
                            exchange: {
                                name: 'accept',
                                type: 'direct'
                            },
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
            (0, common_1.forwardRef)(() => aid_module_1.AidModule),
        ],
        controllers: [rabbitmq_controller_1.RabbitmqController],
        providers: [rabbitmq_service_1.RabbitmqService],
        exports: [rabbitmq_service_1.RabbitmqService],
    })
], RabbitmqModule);
//# sourceMappingURL=rabbitmq.module.js.map
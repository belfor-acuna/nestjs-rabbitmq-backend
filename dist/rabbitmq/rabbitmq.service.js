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
var RabbitmqService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitmqService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const aidrequest_dto_1 = require("../aid/dto/aidrequest.dto");
let RabbitmqService = RabbitmqService_1 = class RabbitmqService {
    constructor(rabbitRequestClient, rabbitAcceptClient) {
        this.rabbitRequestClient = rabbitRequestClient;
        this.rabbitAcceptClient = rabbitAcceptClient;
        this.logger = new common_1.Logger(RabbitmqService_1.name);
    }
    placeAidRequest(aidRequest) {
        const request = new aidrequest_dto_1.RequestDTO();
        request.address = aidRequest.address;
        request.description = aidRequest.applicant.description;
        request.firstName = aidRequest.applicant.firstName;
        request.fullName = `${aidRequest.applicant.firstName} ${aidRequest.applicant.lastName}`;
        request.id = aidRequest.id;
        request.latitude = aidRequest.applicant.latitude;
        request.longitude = aidRequest.applicant.longitude;
        request.servicesRequested = aidRequest.applicant.services;
        request.status = aidRequest.status;
        request.userId = aidRequest.applicant.id;
        this.logger.log(`Sending aid request to aid_requests_queue: ${JSON.stringify(request)}`);
        this.rabbitRequestClient.emit('aid-request-placed', request);
        return { message: "Aid request placed!", request: request };
    }
    acceptRequest(acceptedAid) {
        console.log(`Sending accepted aid request to aid_accepted_queue: ${JSON.stringify(acceptedAid)}`);
        this.rabbitAcceptClient.emit('aid-request-accepted', acceptedAid);
        return { message: "Aid request accepted!", aid: acceptedAid };
    }
};
exports.RabbitmqService = RabbitmqService;
exports.RabbitmqService = RabbitmqService = RabbitmqService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AID_REQUESTS_SERVICE')),
    __param(1, (0, common_1.Inject)('AID_ACCEPTED_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], RabbitmqService);
//# sourceMappingURL=rabbitmq.service.js.map
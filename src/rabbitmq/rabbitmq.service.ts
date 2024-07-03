import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Aid } from 'src/aid/aid.entity';
import { RequestDTO } from 'src/aid/dto/aidrequest.dto';

@Injectable()
export class RabbitmqService {
    private readonly logger = new Logger(RabbitmqService.name);

    constructor(
        @Inject('AID_REQUESTS_SERVICE') private rabbitRequestClient: ClientProxy,
        @Inject('AID_ACCEPTED_SERVICE') private rabbitAcceptClient: ClientProxy
    ) {}

    async placeAidRequest(aidRequest: Aid) {
        const request = new RequestDTO();
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
        request.wardId = aidRequest.ward.id;
        this.logger.log(`Sending aid request to aid_requests_queue: ${JSON.stringify(request)}`);
        await this.rabbitRequestClient.emit('aid-request-placed', request);
        return { message: "Aid request placed!", request: request };
    }

    async acceptRequest(acceptedAid: Aid) {
        console.log(`Sending accepted aid request to aid_accepted_queue: ${JSON.stringify(acceptedAid)}`);
        await this.rabbitAcceptClient.emit('aid-request-accepted', acceptedAid);
        return { message: "Aid request accepted!", aid: acceptedAid };
    }
}

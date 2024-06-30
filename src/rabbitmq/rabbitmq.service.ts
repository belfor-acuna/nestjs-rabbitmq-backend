import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Aid } from 'src/aid/aid.entity';
import { RequestDTO } from 'src/aid/dto/aidrequest.dto';

@Injectable()
export class RabbitmqService {
    constructor(@Inject('AID_REQUESTS_SERVICE') private rabbitClient: ClientProxy){}

    placeAidRequest( aidRequest: Aid){
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
        request.userId = aidRequest.applicant.id
        this.rabbitClient.emit('aid-request-placed', request);
        return { message: "Aid request placed!", request: request}
    }
}   

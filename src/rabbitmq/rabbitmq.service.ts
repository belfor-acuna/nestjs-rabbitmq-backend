import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Aid } from 'src/aid/aid.entity';

@Injectable()
export class RabbitmqService {
    constructor(@Inject('AID_REQUESTS_SERVICE') private rabbitClient: ClientProxy){}

    placeAidRequest( aidRequest: Aid){
        this.rabbitClient.emit('aid-request-placed', aidRequest);
        return { message: "Aid request placed!"}
    }
}   

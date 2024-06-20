import { Controller } from '@nestjs/common';
import { AidService } from './aid.service';

@Controller('aid')
export class AidController {
    constructor(private aidService:AidService){}
}

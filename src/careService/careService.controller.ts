import { Controller, Get } from '@nestjs/common';
import { CareServiceService } from './careService.service';

@Controller('')
export class CareServiceController {
  constructor(private readonly appService: CareServiceService) {}

  @Get('careService')
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CareServiceService {
  getHello(): string {
    return 'Hello care service!';
  }
}

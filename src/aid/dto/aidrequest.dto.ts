// request.dto.ts

import { IsInt, IsString, IsNumber, IsArray, IsEnum } from 'class-validator';
import { AidStatus } from '../enum/status.enum';

export class RequestDTO {
  @IsInt()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  fullName: string;

  @IsString()
  address: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsArray()
  servicesRequested: string[];

  @IsEnum(AidStatus)
  status: AidStatus;

  @IsString()
  description: string;
}

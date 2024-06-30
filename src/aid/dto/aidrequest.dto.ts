import { IsInt, IsString, IsNumber, IsArray, IsEnum } from 'class-validator';
import { AidStatus } from '../enum/status.enum';
import { Service } from 'src/service/service.entity';

export class RequestDTO {
  @IsInt()
  id: number;

  @IsInt()
  userId: number;

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
  servicesRequested: Service[];

  @IsEnum(AidStatus)
  status: AidStatus;

  @IsString()
  description: string;
}

import { IsNumber, IsString } from 'class-validator';

export class CreateAidDto {
  @IsNumber()
  wardId: number;

  @IsString()
  service: string;
}
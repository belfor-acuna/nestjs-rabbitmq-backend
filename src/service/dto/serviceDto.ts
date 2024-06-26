import { IsNotEmpty } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  tag: string;

  @IsNotEmpty()
  description: string;
}
import { IsNumber} from 'class-validator';

export class CreateCoordsDto {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
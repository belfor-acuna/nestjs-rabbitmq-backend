import { Expose } from 'class-transformer';
import { Service } from 'src/service/service.entity';

export class WardDto {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  servicios: Service[];

  @Expose()
  descripcion: string;

  @Expose()
  edad: number;

  @Expose()
  disponible: boolean;

  @Expose()
  ubicacion: { latitude: number, longitude: number };

  @Expose()
  direccion: string;

  @Expose()
  costoPorHora: number;

  @Expose()
  puntaje: number;

  @Expose()
  cantidadResenas: number;

  @Expose()
  fotoPerfil: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumber: string;
}

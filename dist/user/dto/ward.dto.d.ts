import { Service } from 'src/service/service.entity';
export declare class WardDto {
    id: number;
    firstName: string;
    lastName: string;
    servicios: Service[];
    descripcion: string;
    edad: number;
    disponible: boolean;
    ubicacion: {
        latitude: number;
        longitude: number;
    };
    direccion: string;
    costoPorHora: number;
    puntaje: number;
    cantidadResenas: number;
    fotoPerfil: string;
    email: string;
    phoneNumber: string;
}

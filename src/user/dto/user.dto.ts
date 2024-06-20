import { Expose } from 'class-transformer';

export class UserDto {
    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    description: string;

    @Expose()
    age: number;

    @Expose()
    pricePerHour: number;

    @Expose()
    services: string[];

    @Expose()
    phoneNumber: string;

    @Expose()
    id: number;

    @Expose()
    email: string;
}

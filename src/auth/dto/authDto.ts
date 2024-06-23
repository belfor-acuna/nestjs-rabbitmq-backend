import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterAuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName:string;
}

export class LoginAuthDto{
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password:string;
}
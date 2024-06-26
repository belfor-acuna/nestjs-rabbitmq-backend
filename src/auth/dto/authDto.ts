import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class RegisterAuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
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
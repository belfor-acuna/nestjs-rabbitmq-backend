import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from "@nestjs/common";
import { Roles } from "src/user/roles/roles.decorator";
import { ROLES } from "src/user/roles/roles.enum";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";
import { RegisterAuthDto, LoginAuthDto } from "./dto/authDto";
import { Public } from "./guards/public.auth.decorator";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: LoginAuthDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Roles(ROLES.Applicant, ROLES.Ward)
  @Get("me")
  getMe(@Request() req) {
    return this.userService.findOne(req.user.userId);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("register/ward")
  registerWard(@Body() signupDto: RegisterAuthDto) {
    return this.userService.signUpWard(signupDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("register/applicant")
  registerApplicant(@Body() signupDto: RegisterAuthDto) {
    return this.userService.signUpApplicant(signupDto);
  }
}

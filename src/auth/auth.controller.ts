import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/authDto';
import { Roles } from 'src/user/roles/roles.decorator';
import { ROLES } from 'src/user/roles/roles.enum';
import { UserService } from 'src/user/user.service';
import { Public } from './guards/public.auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private userService:UserService
    ){}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body()signInDto: CreateAuthDto){
        return this.authService.signIn(signInDto.email,signInDto.password);
    }

    
    @Roles(ROLES.Applicant, ROLES.Ward)
    @Get('me')
    getMe(@Request() req){
        return req.user
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('register/ward')
    registerWard(@Body() signupDto:CreateAuthDto){
        return this.userService.signUpWard(signupDto);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('register/applicant')
    registerApplicant(@Body() signupDto:CreateAuthDto){
        return this.userService.signUpApplicant(signupDto);
    }
}

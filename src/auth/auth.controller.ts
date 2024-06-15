import { Body, Controller, Get, HttpCode, HttpStatus, Post,UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/authDto';
import { AuthGuard } from './guards/auth.guard';
import { Roles } from 'src/user/roles/roles.decorator';
import { ROLES } from 'src/user/roles/roles.enum';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private userService:UserService
    ){}


    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body()signInDto: CreateAuthDto){
        return this.authService.signIn(signInDto.email,signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Roles(ROLES.Applicant,ROLES.Ward)
    @Get('profile')
    getProfile(@Request() req){
        return req.user
    }

    @HttpCode(HttpStatus.OK)
    @Post('register/ward')
    registerWard(@Body() signupDto:CreateAuthDto){
        return this.userService.signUpWard(signupDto);
    }
}

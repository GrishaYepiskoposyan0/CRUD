import { BadRequestException, Get, Req } from "@nestjs/common";
import { Body, Controller, Param, Post } from "@nestjs/common";
import { LoginDto } from "src/users/dto/login.dto";
import { RegistreDto } from "src/users/dto/register.dto";
import { AuthService } from "./auth.service";
import { Res } from "@nestjs/common";
import { Request, Response } from 'express'

@Controller()
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('register')
    register(@Body() registerDto: RegistreDto) {
        return this.authService.register(registerDto)
    }

    @Post('login')
    login(@Body() loginDto: LoginDto, @Res({passthrough: true}) res: Response){
        return this.authService.login(loginDto, res)
    }
}
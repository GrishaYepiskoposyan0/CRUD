import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entity/users.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { RegistreDto } from "src/users/dto/register.dto";
import { LoginDto } from "src/users/dto/login.dto";
import { BadRequestException } from "@nestjs/common";
import { Request, Response } from 'express'


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly authRepository: Repository<User>,
        public readonly jwtService: JwtService
    ){}

    async register(registerDto: RegistreDto): Promise<void>{
        registerDto.password = await bcrypt.hash(registerDto.password, 12)
        this.authRepository.save(registerDto)
    }

    findOne(data: any): Promise<User>{
        return this.authRepository.findOne(data);
    }

    async login(loginDto: LoginDto, response: Response){
        const email = loginDto.email
        const user = await this.findOne({email})

        if(!user){
            throw new BadRequestException('User not found!')
        }
        if(!await bcrypt.compare(loginDto.password, user.password)){
            throw new BadRequestException('Invalid password!')
        }

        const jwt = await this.jwtService.signAsync({user: user})
        return {
            access_token: jwt
        };
    }
}
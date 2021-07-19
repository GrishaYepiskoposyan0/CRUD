import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/entity/users.entity";
import { Repository } from "typeorm";
import { RegistreDto } from "src/users/dto/register.dto";
import { LoginDto } from "src/users/dto/login.dto";
import { Response } from 'express';
export declare class AuthService {
    private readonly authRepository;
    readonly jwtService: JwtService;
    constructor(authRepository: Repository<User>, jwtService: JwtService);
    register(registerDto: RegistreDto): Promise<void>;
    findOne(data: any): Promise<User>;
    login(loginDto: LoginDto, response: Response): Promise<{
        access_token: string;
    }>;
}

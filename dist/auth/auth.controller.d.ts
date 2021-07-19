import { LoginDto } from "src/users/dto/login.dto";
import { RegistreDto } from "src/users/dto/register.dto";
import { AuthService } from "./auth.service";
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegistreDto): Promise<void>;
    login(loginDto: LoginDto, res: Response): Promise<{
        access_token: string;
    }>;
}

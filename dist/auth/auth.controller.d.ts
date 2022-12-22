import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    reg(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
}

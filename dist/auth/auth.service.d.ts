import { JwtService } from '@nestjs/jwt/dist';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(userDto: CreateUserDto): Promise<void>;
    reg(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    generateToken(user: User): Promise<{
        token: string;
    }>;
}

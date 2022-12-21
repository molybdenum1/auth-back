import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.model';


@Injectable()
export class AuthService {

    constructor(private userService : UserService, private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {

    }

    async reg(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if(candidate){
            throw new HttpException('User with this email already exists.', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 6);
        const user = await this.userService.createUser({...userDto, password: hashPassword});
        return this.generateToken(user);
    }   

    async generateToken(user: User) {
        const payload = {email: user.email, id: user.id};
        return {
            token: this.jwtService.sign(payload)
        };
    }

}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor( @InjectModel(User) private userRepo: typeof User ){}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepo.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepo.findAll();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepo.findOne({where: {email}, include: {all: true}});
        return user;
    }
  
}

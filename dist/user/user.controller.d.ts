import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
}

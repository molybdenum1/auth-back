import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
export declare class UserService {
    private userRepo;
    constructor(userRepo: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}

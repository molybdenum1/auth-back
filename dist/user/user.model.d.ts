import { Model } from "sequelize-typescript";
interface UserCreationAttr {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttr> {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
export {};

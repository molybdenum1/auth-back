import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, Model, DataType, Table } from "sequelize-typescript";

interface UserCreationAttr {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr>{
    @ApiProperty({example: '1', description: 'Unique identificator'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'email@email.com', description: `User's email address`})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: 'JOJ222Ll', description: `User's password`})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'Anika', description: `User's first name`})
    @Column({ type: DataType.STRING, allowNull: false })
    firstName: string;

    @ApiProperty({example: 'ZHO', description: `User's last name`})
    @Column({ type: DataType.STRING, allowNull: true })
    lastName: string; 

}
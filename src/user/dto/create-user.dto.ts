import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateUserDto {
    @ApiProperty({example: 'email@email.com', description: `User's email`})
    readonly email: string;
    
    @ApiProperty({example: 'JOJ222Ll', description: `User's password`})
    readonly password: string;
    
}
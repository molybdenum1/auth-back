import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';


@ApiTags('USERS')
@Controller('user')
export class UserController {
  constructor(private userService: UserService){}

  @ApiOperation({summary: 'Creating users',})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.userService.createUser(userDto);
  }

  @ApiOperation({summary: 'Returning array od users ',})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll(){
    return this.userService.getAllUsers();
  }

}

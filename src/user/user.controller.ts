import { UserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from './interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<IUser> {
    return this.userService.createUser(userDto);
  }

  @Get()
  async getUsers(): Promise<IUser[]> {
    return null;
  }

  @Get()
  async getUserByName(username: string): Promise<IUser> {
    return null;
  }
}

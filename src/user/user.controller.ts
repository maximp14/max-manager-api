import { UserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<void> {}

  @Get()
  async getUsers(): Promise<User[]> {
    return null;
  }

  @Get()
  async getUserByName(username: string): Promise<User> {
    return null;
  }
}

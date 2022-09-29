import { IUser } from './interface/user.interface';
import { UserDto } from './dto/create-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userSchema: Model<IUser>) {}

  async createUser(userDto: UserDto): Promise<IUser> {
    const user = new this.userSchema(userDto);

    return user.save();
  }

  async getUsers(): Promise<IUser[]> {
    return await this.userSchema.find();
  }

  async getUserByName(name: string): Promise<IUser> {
    const user = await this.userSchema.findOne({ userName: name });

    if (!user) throw new NotFoundException('Usuario no encontrado');

    return user;
  }
}

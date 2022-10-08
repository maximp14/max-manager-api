import { Document } from 'mongoose';

export interface IUser extends Document {
  userName: string;

  password: string;

  email: string;

  createdAt: Date;

  updatedAt: Date;
}

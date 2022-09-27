import { Document } from 'mongoose';

export interface User extends Document {
  readonly userName: string;

  readonly password: string;

  readonly email: string;

  readonly createdAt: Date;

  readonly updatedAt: Date;
}

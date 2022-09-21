import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

@Schema()
class User {
  @Prop({ required: true })
  userName: string;

  @Prop({ minlength: 4, maxlength: 10, required: true })
  password: string;

  @Prop()
  email: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;

export type UserModel = Model<User>;

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: User}
    ]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

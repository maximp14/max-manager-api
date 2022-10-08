import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @MaxLength(20)
  @IsNotEmpty({ message: 'username is required' })
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(5)
  @MaxLength(20)
  @IsNotEmpty()
  @IsString()
  password: string;
}

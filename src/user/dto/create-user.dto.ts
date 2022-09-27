import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @MaxLength(20)
  @IsNotEmpty({ message: 'El Campos username es requerido' })
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

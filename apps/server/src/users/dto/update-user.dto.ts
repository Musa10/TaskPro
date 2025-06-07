// update-user.dto.ts
import { IsEmail, IsString, MinLength, MaxLength, IsOptional, IsEnum } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password?: string;

  @IsOptional()
  @IsString()
  name?: string;

//   @IsOptional()
//   @IsString()
//   lastName?: string;

//   @IsOptional()
//   @IsString()
//   phoneNumber?: string;

//   @IsOptional()
//   @IsEnum(['user', 'admin'], { message: 'Role must be either "user" or "admin"' })
//   role?: string;
}
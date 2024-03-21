import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string; // Use email instead of username if your application uses emails for logging in

  @IsString()
  @IsNotEmpty()
  password: string;
}

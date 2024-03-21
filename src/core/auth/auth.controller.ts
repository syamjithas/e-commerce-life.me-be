import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    try {
      const user = await this.authService.validateUser(
        loginDto.email,
        loginDto.password,
      );
      return this.authService.login(user);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        // Handle UnauthorizedException, maybe logging or custom response
        throw new UnauthorizedException('Login failed');
      }
      throw error; // Re-throw if it's not an UnauthorizedException
    }
  }
}

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './core/auth/decorators/roles.decorator';
import { JwtAuthGuard } from './core/auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Roles('admin') // Use the Roles decorator to specify required roles
  @UseGuards(JwtAuthGuard) // Make sure to authenticate the request first
  getHello(): string {
    return this.appService.getHello();
  }
}

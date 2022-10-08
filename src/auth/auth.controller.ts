import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log('req', req.user);
    return this.authService.login(req.user);
  }
}

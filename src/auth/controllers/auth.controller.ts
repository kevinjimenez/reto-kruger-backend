import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateLoginDto } from '../../empleado/dtos/login.dto';
import { LoginService } from '../../empleado/services/login.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LoginEntity } from '../../empleado/entities/login.entity';
import { AuthService } from '../services/auth.service';
import { EmpleadoEntity } from '../../empleado/entities/empleado.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _loginService: LoginService,
    private readonly _authService: AuthService,
  ) {}

  @Post('signin')
  signIn(@Body() payload: CreateLoginDto) {
    return this._loginService.createOne(payload);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as LoginEntity;
    const { empleado } = user;
    return this._authService.generateJWT(empleado as EmpleadoEntity);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { CreateLoginDto } from '../../empleado/dtos/login.dto';
import { LoginService } from '../../empleado/services/login.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _loginService: LoginService) {}

  @Post('signin')
  signIn(@Body() payload: CreateLoginDto) {
    return this._loginService.createOne(payload);
  }

  @Post('login')
  login() {}
}

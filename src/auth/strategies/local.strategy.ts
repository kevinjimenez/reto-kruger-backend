import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly _authService: AuthService) {
    super({
      usernameField: 'usuario',
      passwordField: 'password',
    });
  }

  async validate(usuario: string, password: string) {
    const empleado = await this._authService.validateUser(usuario, password);
    if (!empleado) {
      throw new UnauthorizedException('not allow');
    }
    return empleado;
  }
}

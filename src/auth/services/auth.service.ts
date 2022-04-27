import { Injectable } from '@nestjs/common';
import { EmpleadoService } from '../../empleado/services/empleado.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginService } from '../../empleado/services/login.service';
import { EmpleadoEntity } from '../../empleado/entities/empleado.entity';
import { TokenInterface } from '../interfaces/token.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly _loginService: LoginService,
    private readonly _jwtService: JwtService,
  ) {}

  async validateUser(usuario: string, password: string) {
    const user = await this._loginService.findByUsuario(usuario);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }

  generateJWT(empleado: EmpleadoEntity) {
    const payload: TokenInterface = { rol: empleado.rol, id: empleado.id };
    return {
      access_token: this._jwtService.sign(payload),
      empleado,
    };
  }
}

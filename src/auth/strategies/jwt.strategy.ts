import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../../config/config';
import { TokenInterface } from '../interfaces/token.interface';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(config.KEY)
    _configServer: ConfigType<typeof config>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: _configServer.jwt.secret,
    });
  }

  validate(payload: TokenInterface) {
    return payload;
  }
}

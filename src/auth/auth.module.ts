import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { EmpleadoModule } from '../empleado/empleado.module';
import { AuthService } from './services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import config from '../config/config';
import { ConfigType } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    EmpleadoModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (_configService: ConfigType<typeof config>) => {
        const { jwt } = _configService;
        const { secret, time } = jwt;
        return {
          privateKey: secret,
          signOptions: {
            expiresIn: time,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}

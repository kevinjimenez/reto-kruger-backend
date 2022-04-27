import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { EmpleadoModule } from '../empleado/empleado.module';

@Module({
  imports: [EmpleadoModule],
  controllers: [AuthController],
})
export class AuthModule {
}

import { Module } from '@nestjs/common';
import { EmpleadoController } from './controllers/empleado.controller';
import { EmpleadoService } from './services/empleado.service';
import { LoginService } from './services/login.service';
import { DireccionService } from './services/direccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTIDADES_EMPLEADO } from './common/entidades-empleado';

@Module({
  imports: [TypeOrmModule.forFeature([...ENTIDADES_EMPLEADO], 'default')],
  controllers: [EmpleadoController],
  providers: [EmpleadoService, LoginService, DireccionService],
  exports: [EmpleadoService, LoginService, DireccionService],
})
export class EmpleadoModule {}

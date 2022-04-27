import { Module } from '@nestjs/common';
import { EmpleadoController } from './controllers/empleado.controller';
import { EmpleadoService } from './services/empleado.service';
import { LoginService } from './services/login.service';
import { DireccionService } from './services/direccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTIDADES_EMPLEADO } from './common/entidades-empleado';
import { DireccionController } from './controllers/direccion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([...ENTIDADES_EMPLEADO], 'default')],
  controllers: [EmpleadoController, DireccionController],
  providers: [EmpleadoService, LoginService, DireccionService],
  exports: [LoginService],
})
export class EmpleadoModule {
}

import { EmpleadoModule } from '../empleado/empleado.module';
import { VacunaModule } from '../vacuna/vacuna.module';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

export const MODULOS_VACUNACION = [
  EmpleadoModule,
  VacunaModule,
  DatabaseModule,
  AuthModule,
];

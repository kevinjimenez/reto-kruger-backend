import { ENTIDADES_EMPLEADO } from '../empleado/common/entidades-empleado';
import { ENTIDADES_VACUNA } from '../vacuna/common/entidades-vacuna';

export const ENTIDADES_VACUNACION = [
  ...ENTIDADES_EMPLEADO,
  ...ENTIDADES_VACUNA,
];

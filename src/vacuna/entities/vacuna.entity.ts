import { Column, Entity } from 'typeorm';
import { PrincipalEntity } from '../../common/principal.entity';

@Entity('vacuna')
export class VacunaEntity extends PrincipalEntity {
  @Column({
    type: 'varchar',
    name: 'tipo_vacuna',
  })
  tipoVacuna: string;

  @Column({
    type: 'date',
    name: 'fecha_vacunacion',
  })
  fechaVacunacion: string;

  @Column({
    type: 'int',
    name: 'numero_dosis',
  })
  numeroDosis: number;
}

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PrincipalEntity } from '../../common/principal.entity';
import { EmpleadoEntity } from '../../empleado/entities/empleado.entity';

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

  @ManyToOne(() => EmpleadoEntity, (empleado) => empleado.vacunas)
  @JoinColumn({ name: 'id_empleado' })
  empleado: EmpleadoEntity | number;
}

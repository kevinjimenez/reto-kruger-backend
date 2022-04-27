import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PrincipalEntity } from '../../common/principal.entity';
import { EmpleadoEntity } from './empleado.entity';

@Entity('direccion')
export class DireccionEntity extends PrincipalEntity {
  @Column({
    type: 'varchar',
    name: 'provincia',
    length: 30,
  })
  provincia: string;

  @Column({
    type: 'varchar',
    name: 'ciudad',
    length: 30,
  })
  ciudad: string;

  @Column({
    type: 'varchar',
    name: 'calle_principal',
    length: 60,
  })
  callePrincipal: string;

  @Column({
    type: 'varchar',
    name: 'calle_secundaria',
    length: 60,
    nullable: true,
  })
  calleSecundaria?: string;

  @ManyToOne(() => EmpleadoEntity, (empleado) => empleado.direcciones)
  @JoinColumn({ name: 'id_empleado' })
  empleado: EmpleadoEntity | number;
}

import { Column, Entity } from 'typeorm';
import { PrincipalEntity } from '../../common/principal.entity';

@Entity('empleado')
export class EmpleadoEntity extends PrincipalEntity {
  @Column({
    type: 'varchar',
    name: 'nombres',
    length: 60,
  })
  nombres: string;

  @Column({
    type: 'varchar',
    name: 'apellidos',
    length: 60,
  })
  apellidos: string;

  @Column({
    type: 'varchar',
    name: 'cedula',
    length: 10,
    unique: true,
  })
  cedula: string;

  @Column({
    type: 'varchar',
    name: 'correo_electronico',
    length: 30,
    unique: true,
  })
  correoElectronico: string;

  @Column({
    type: 'date',
    name: 'fecha_nacimiento',
    nullable: true,
  })
  fechaNacimiento: string;

  @Column({
    type: 'varchar',
    name: 'telefono_movil',
    nullable: true,
  })
  telefonoMovil: string;

  @Column({
    type: 'boolean',
    name: 'vacunado',
    nullable: true,
  })
  vacunado: string;
}

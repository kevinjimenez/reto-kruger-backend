import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { PrincipalEntity } from '../../common/principal.entity';
import { VacunaEntity } from '../../vacuna/entities/vacuna.entity';
import { LoginEntity } from './login.entity';
import { DireccionEntity } from './direccion.entity';

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

  @OneToMany(() => DireccionEntity, (direcciones) => direcciones.empleado)
  direcciones: DireccionEntity[];

  @OneToMany(() => VacunaEntity, (vacunas) => vacunas.empleado)
  vacunas: VacunaEntity[];

  @OneToOne(() => LoginEntity, (login) => login.empleado)
  @JoinColumn({ name: 'id_login' })
  login: LoginEntity | number;
}

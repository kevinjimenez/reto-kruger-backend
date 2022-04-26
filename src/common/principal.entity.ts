import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class PrincipalEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @CreateDateColumn({
    name: 'fecha_creacion',
    type: 'timestamp',
  })
  fechaCreacion: Date = new Date();

  @UpdateDateColumn({
    name: 'fecha_actualizacion',
    type: 'timestamp',
  })
  fechaActualizacion: Date = new Date();
}

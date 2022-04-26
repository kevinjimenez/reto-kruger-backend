import { Column, Entity } from 'typeorm';
import { PrincipalEntity } from '../../common/principal.entity';

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
  calleSecundaria: string;
}

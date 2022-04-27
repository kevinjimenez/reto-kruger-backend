import { Column, Entity } from 'typeorm';
import { PrincipalEntity } from '../../common/principal.entity';

@Entity('login')
export class LoginEntity extends PrincipalEntity {
  @Column({
    type: 'varchar',
    name: 'usuario',
    unique: true,
  })
  usuario: string;

  @Column({
    type: 'varchar',
    name: 'password',
    unique: true,
    length: 16,
  })
  password: string;
}

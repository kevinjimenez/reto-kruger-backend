import { Injectable } from '@nestjs/common';
import { PrincipalService } from '../../common/principal.service';
import { LoginEntity } from '../entities/login.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoginDto, UpdateLoginDto } from '../dtos/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService extends PrincipalService<
  LoginEntity,
  CreateLoginDto,
  UpdateLoginDto
> {
  constructor(
    @InjectRepository(LoginEntity)
    private readonly _loginRepository: Repository<LoginEntity>,
  ) {
    super(_loginRepository);
  }

  async createOne(payload: CreateLoginDto): Promise<LoginEntity> {
    const loginNuevo = this._loginRepository.create(payload);
    const hashPassword = await bcrypt.hash(loginNuevo.password, 10);
    loginNuevo.password = hashPassword;
    return await this._loginRepository.save(loginNuevo);
  }

  async findByUsuario(usuario: string) {
    return await this._loginRepository.findOne({
      relations: ['empleado'],
      where: {
        usuario,
      },
    });
  }
}

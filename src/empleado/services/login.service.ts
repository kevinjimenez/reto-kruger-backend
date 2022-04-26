import { Injectable } from '@nestjs/common';
import { PrincipalService } from '../../common/principal.service';
import { LoginEntity } from '../entities/login.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoginDto, UpdateLoginDto } from '../dtos/login.dto';

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
}

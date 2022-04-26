import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '../../common/principal.service';
import { EmpleadoEntity } from '../entities/empleado.entity';
import { CreateEmpleadoDto, UpdateEmpleadoDto } from '../dtos/empleado.dto';

@Injectable()
export class EmpleadoService extends PrincipalService<
  EmpleadoEntity,
  CreateEmpleadoDto,
  UpdateEmpleadoDto
> {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly _empleadoRepository: Repository<EmpleadoEntity>,
  ) {
    super(_empleadoRepository);
  }
}

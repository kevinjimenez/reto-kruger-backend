import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '../../common/principal.service';
import { EmpleadoEntity } from '../entities/empleado.entity';
import { CreateEmpleadoDto, UpdateEmpleadoDto } from '../dtos/empleado.dto';
import { DireccionService } from './direccion.service';

@Injectable()
export class EmpleadoService extends PrincipalService<
  EmpleadoEntity,
  CreateEmpleadoDto,
  UpdateEmpleadoDto
> {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly _empleadoRepository: Repository<EmpleadoEntity>,
    private readonly _direccionService: DireccionService,
  ) {
    super(_empleadoRepository);
  }

  async findAll() {
    return await this._empleadoRepository.find({
      relations: ['direcciones', 'vacunas'],
    });
  }
}

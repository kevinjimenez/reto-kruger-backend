import { Injectable } from '@nestjs/common';
import { PrincipalService } from '../../common/principal.service';
import { DireccionEntity } from '../entities/direccion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDireccionDto, UpdateDireccionDto } from '../dtos/direccion.dto';

@Injectable()
export class DireccionService extends PrincipalService<
  DireccionEntity,
  CreateDireccionDto,
  UpdateDireccionDto
> {
  constructor(
    @InjectRepository(DireccionEntity)
    private readonly _direccionRepository: Repository<DireccionEntity>,
  ) {
    super(_direccionRepository);
  }
}

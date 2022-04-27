import { Injectable } from '@nestjs/common';
import { PrincipalService } from '../../common/principal.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VacunaEntity } from '../entities/vacuna.entity';
import { CreateVacunaDto, UpdateVacunaDto } from '../dtos/vacuna.dto';

@Injectable()
export class VacunaService extends PrincipalService<
  VacunaEntity,
  CreateVacunaDto,
  UpdateVacunaDto
> {
  constructor(
    @InjectRepository(VacunaEntity)
    private readonly _vacunaRepository: Repository<VacunaEntity>,
  ) {
    super(_vacunaRepository);
  }
}

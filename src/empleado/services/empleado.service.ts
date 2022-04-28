import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '../../common/principal.service';
import { EmpleadoEntity } from '../entities/empleado.entity';
import { CreateEmpleadoDto, UpdateEmpleadoDto } from '../dtos/empleado.dto';
import { DireccionService } from './direccion.service';
import { LoginService } from './login.service';
import { LoginEntity } from '../entities/login.entity';

@Injectable()
export class EmpleadoService extends PrincipalService<EmpleadoEntity,
  CreateEmpleadoDto,
  UpdateEmpleadoDto> {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly _empleadoRepository: Repository<EmpleadoEntity>,
    private readonly _direccionService: DireccionService,
    private readonly _loginService: LoginService,
  ) {
    super(_empleadoRepository);
  }

  async findAll(criterioBusqueda?: {
    tipoVacuna?: string;
    vacunado?: boolean;
    fechaInicio?: string;
    fechaFin?: string;
    cedula?: string;
    correoElectronico?: string;
  }) {
    const query = this._empleadoRepository.createQueryBuilder('empleado');

    const {
      cedula,
      correoElectronico,
      tipoVacuna,
      vacunado,
      fechaInicio,
      fechaFin,
    } = criterioBusqueda;

    query.leftJoinAndSelect('empleado.direcciones', 'direcciones');
    query.leftJoinAndSelect('empleado.vacunas', 'vacunas');

    if (vacunado) {
      query.andWhere('empleado.vacunado = :vacunado', { vacunado });
    }

    if (cedula) {
      query.andWhere('empleado.cedula = :cedula', { cedula });
    }

    if (correoElectronico) {
      query.andWhere('empleado.correoElectronico = :correoElectronico', {
        correoElectronico,
      });
    }

    if (tipoVacuna) {
      query.andWhere('vacunas.tipoVacuna = :tipoVacuna', {
        tipoVacuna,
      });
    }

    if (fechaInicio && fechaFin) {
      query.andWhere(
        `vacunas.fechaVacunacion BETWEEN :fechaInicio AND :fechaFin`,
        { fechaInicio, fechaFin },
      );
    }

    query.orderBy({
      'vacunas.id': 'DESC',
    });

    return await query.getMany();
  }

  async findById(id: number): Promise<EmpleadoEntity> {
    const item = await this._empleadoRepository.findOne(id, {
      relations: ['direcciones', 'vacunas', 'login'],
    });
    if (!item) {
      throw new NotFoundException(`Registro ${id} no encontrado`);
    }
    return item;
  }

  async deleteOne(id: number): Promise<number> {
    try {
      const empleado = await this._empleadoRepository.findOne(id, {
        relations: ['login'],
      });
      const { login } = empleado;
      await super.deleteOne(id);
      if (login) {
        await this._loginService.deleteOne((login as LoginEntity).id);
      }
      return id;
    } catch (e) {
      console.log(e);
    }
  }
}

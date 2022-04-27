import { Body, Controller, Post, Put } from '@nestjs/common';
import { VacunaService } from '../services/vacuna.service';
import { CreateVacunaDto, UpdateVacunaDto } from '../dtos/vacuna.dto';
import { VacunaEntity } from '../entities/vacuna.entity';

@Controller('vacuna')
export class VacunaController {
  constructor(private readonly _vacunaService: VacunaService) {}

  @Post()
  crearDireccion(@Body() payload: CreateVacunaDto[]) {
    return this._vacunaService.createMany(payload);
  }

  @Put()
  async actualizarDireccion(@Body() payload: UpdateVacunaDto[]) {
    let vacunasEditadas: VacunaEntity[] = [];
    for (const vacuna of payload) {
      const { id } = vacuna;
      const vacunaEditada = await this._vacunaService.updateById(id, vacuna);
      vacunasEditadas = [vacunaEditada, ...vacunasEditadas];
    }
    return vacunasEditadas;
  }
}

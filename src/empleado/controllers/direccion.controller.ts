import { Body, Controller, Post, Put } from '@nestjs/common';
import { DireccionService } from '../services/direccion.service';
import { CreateDireccionDto, UpdateDireccionDto } from '../dtos/direccion.dto';
import { DireccionEntity } from '../entities/direccion.entity';

@Controller('direccion')
export class DireccionController {
  constructor(private readonly _direccionService: DireccionService) {
  }

  @Post()
  crearDireccion(@Body() payload: CreateDireccionDto[]) {
    return this._direccionService.createMany(payload);
  }

  @Put()
  async actualizarDireccion(@Body() payload: UpdateDireccionDto[]) {
    let direccionesEditadas: DireccionEntity[] = [];
    for (const direccion of payload) {
      const { id } = direccion;
      const direcccionEditada = await this._direccionService.updateById(
        id,
        direccion,
      );
      direccionesEditadas = [direcccionEditada, ...direccionesEditadas];
    }
    return direccionesEditadas;
  }
}

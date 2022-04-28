import { Body, Controller, Post, Put } from '@nestjs/common';
import { DireccionService } from '../services/direccion.service';
import { CreateDireccionDto, UpdateDireccionDto } from '../dtos/direccion.dto';
import { DireccionEntity } from '../entities/direccion.entity';

@Controller('direccion')
export class DireccionController {
  constructor(private readonly _direccionService: DireccionService) {}

  @Post()
  crearDireccion(@Body() payload: CreateDireccionDto[]) {
    return this._direccionService.createMany(payload);
  }

  @Put()
  async actualizarDireccion(@Body() payload: UpdateDireccionDto[]) {
    let direccionesEditadas: DireccionEntity[] = [];
    for (const direccion of payload) {
      let direcccionEditada;
      const { id } = direccion;
      if (id) {
        direcccionEditada = await this._direccionService.updateById(
          id,
          direccion,
        );
      } else {
        direcccionEditada = await this._direccionService.createOne(
          direccion as CreateDireccionDto,
        );
      }
      direccionesEditadas = [direcccionEditada, ...direccionesEditadas];
    }
    return direccionesEditadas;
  }
}

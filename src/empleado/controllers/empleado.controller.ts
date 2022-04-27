import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EmpleadoService } from '../services/empleado.service';
import { CreateEmpleadoDto, UpdateEmpleadoDto } from '../dtos/empleado.dto';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly _empleadoService: EmpleadoService) {}

  @Get()
  obtenerEmpleados() {
    return this._empleadoService.findAll();
  }

  @Post()
  crearEmpleado(@Body() payload: CreateEmpleadoDto) {
    return this._empleadoService.createOne(payload);
  }

  @Put(':id')
  actualizarEmpleado(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateEmpleadoDto,
  ) {
    return this._empleadoService.updateById(id, payload);
  }

  @Delete(':id')
  eliminarEmpleado() {
    return this._empleadoService.findAll();
  }
}

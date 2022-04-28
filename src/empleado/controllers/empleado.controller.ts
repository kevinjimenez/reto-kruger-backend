import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EmpleadoService } from '../services/empleado.service';
import { CreateEmpleadoDto, UpdateEmpleadoDto } from '../dtos/empleado.dto';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly _empleadoService: EmpleadoService) {}

  @Get()
  obtenerEmpleados(@Query() criterio: any) {
    return this._empleadoService.findAll(criterio);
  }

  @Post()
  crearEmpleado(@Body() payload: CreateEmpleadoDto) {
    return this._empleadoService.createOne(payload);
  }

  @Get(':id')
  obtenerEmpleadoPorId(@Param('id', ParseIntPipe) id: number) {
    return this._empleadoService.findById(id);
  }

  @Put(':id')
  actualizarEmpleado(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateEmpleadoDto,
  ) {
    return this._empleadoService.updateById(id, payload);
  }

  @Delete(':id')
  eliminarEmpleado(@Param('id', ParseIntPipe) id: number) {
    return this._empleadoService.deleteOne(id);
  }
}

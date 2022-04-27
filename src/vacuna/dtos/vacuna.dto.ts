import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EmpleadoEntity } from '../../empleado/entities/empleado.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateVacunaDto {
  @IsNotEmpty()
  @IsString()
  tipoVacuna: string;

  @IsNotEmpty()
  @IsDateString()
  fechaVacunacion: string;

  @IsNotEmpty()
  @IsInt()
  numeroDosis: number;

  @IsNotEmpty()
  empleado: EmpleadoEntity | number;
}

export class UpdateVacunaDto extends PartialType(CreateVacunaDto) {
  @IsOptional()
  @IsInt()
  id?: number;
}

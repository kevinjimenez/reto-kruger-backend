import { IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { EmpleadoEntity } from '../entities/empleado.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateDireccionDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  provincia: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 60)
  ciudad: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 60)
  callePrincipal: string;

  @IsOptional()
  @IsString()
  @Length(3, 60)
  calleSecundaria?: string;

  @IsNotEmpty()
  empleado: EmpleadoEntity | number;
}

export class UpdateDireccionDto extends PartialType(CreateDireccionDto) {
  @IsOptional()
  @IsInt()
  id?: number;
}

import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { EmpleadoEntity } from '../entities/empleado.entity';

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  usuario: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 16)
  password: string;

  @IsOptional()
  empleado?: EmpleadoEntity | number;
}

export class UpdateLoginDto extends PartialType(CreateLoginDto) {}

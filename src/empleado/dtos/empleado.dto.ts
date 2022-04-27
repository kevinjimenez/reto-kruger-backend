import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
// import { PartialType } from '@nestjs/swagger';
import { LoginEntity } from '../entities/login.entity';
import { PartialType } from '@nestjs/mapped-types';

export class CreateEmpleadoDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 60)
  nombres: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 60)
  apellidos: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 10)
  cedula: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(3, 30)
  correoElectronico: string;

  @IsNotEmpty()
  login: LoginEntity | number;
}

export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {
  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @IsOptional()
  @IsString()
  @Length(7, 10)
  telefonoMovil?: string;

  @IsOptional()
  @IsBoolean()
  vacunado?: true | false;
}

import { Module } from '@nestjs/common';
import { VacunaService } from './services/vacuna.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTIDADES_VACUNA } from './common/entidades-vacuna';
import { VacunaController } from './controllers/vacuna.controller';

@Module({
  imports: [TypeOrmModule.forFeature([...ENTIDADES_VACUNA], 'default')],
  providers: [VacunaService],
  exports: [VacunaService],
  controllers: [VacunaController],
})
export class VacunaModule {}

import { Module } from '@nestjs/common';
import { VacunaService } from './services/vacuna.service';

@Module({
  providers: [VacunaService],
  exports: [VacunaService],
})
export class VacunaModule {}

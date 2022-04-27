import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Environments } from './environments/environments';
import { MODULOS_VACUNACION } from './common/modulos-vacunacion';

@Module({
  imports: [
    ConfigModule.forRoot(Environments.opcionesConfigModule),
    ...MODULOS_VACUNACION,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

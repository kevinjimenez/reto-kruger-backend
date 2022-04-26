import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config/config';
import { ConfigType } from '@nestjs/config';
import { ENTIDADES_VACUNACION } from '../common/entidades-vacunacion';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (_configService: ConfigType<typeof config>) => {
        const { database } = _configService;
        const { postgres } = database;
        const { host, password, port, user, dbName } = postgres;

        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: false,
          entities: [...ENTIDADES_VACUNACION],
          // autoLoadEntities: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}

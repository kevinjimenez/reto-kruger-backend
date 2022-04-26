import * as Joi from 'joi';
import config from '../config/config';
import { ConfigObject } from '@nestjs/config';

export class Environments {
  static environment = {
    dev: '.env',
  };

  static opcionesConfigModule: ConfigObject = {
    envFilePath: this.environment[process.env.NODE_ENV] || '.env',
    isGlobal: true,
    load: [config],
    validationSchema: Joi.object({
      PORT: Joi.number().required(),
      POSTGRES_DB: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_HOST: Joi.string().required(),
      JWT_SECRET: Joi.string().required(),
      JWT_TIME: Joi.string().required(),
    }),
  };
}

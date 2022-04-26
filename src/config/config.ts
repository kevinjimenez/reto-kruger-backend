import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    port: process.env.PORT,
    database: {
      postgres: {
        dbName: process.env.POSTGRES_DB,
        port: parseInt(process.env.POSTGRES_PORT),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      time: process.env.JWT_TIME,
    },
  };
});

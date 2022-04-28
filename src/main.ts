import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const validacionDtos = new ValidationPipe({
  whitelist: true,
  // forbidNonWhitelisted: true,
  // disableErrorMessages: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validacionDtos);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}

bootstrap();

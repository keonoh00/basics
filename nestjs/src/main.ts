import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // "whitelist": If true, strips validated (returned) object of
      // any properties that do not have any decorator.
      whitelist: true,
      // "forbidNonWhitelisted": Forbid request body properties
      // that do not have any decorator.
      forbidNonWhitelisted: true,
      // "transform": If true, it automatically transforms the payload
      // to the DTO type.
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

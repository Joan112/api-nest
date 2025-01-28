import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(bodyParser.json());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no declaradas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se encuentran propiedades no declaradas
      transform: true, // Transforma los datos a su tipo declarado en el DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

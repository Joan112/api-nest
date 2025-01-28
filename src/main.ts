import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(bodyParser.json());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

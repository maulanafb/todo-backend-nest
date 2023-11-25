import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Backend Nestjs')
    .setDescription('Backend NestAPI Documentation')
    .addBearerAuth(
      {type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header'}, 'accessToken')
    .setVersion('1.0')
    .addTag('Api').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('openapi',app,document);
  await app.listen(3000);
}
bootstrap();

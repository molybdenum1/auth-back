import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('authentification on nest js')
    .setDescription('REST API documention')
    .setVersion('1.0.0')
    .addTag('auth')
    .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, doc);

  await app.listen(5000);


}
bootstrap();

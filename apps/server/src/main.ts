import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS if you're calling from a frontend like Next.js
  app.enableCors({
    origin: ['http://localhost:3000'], // Add your frontend origin
    credentials: true,
  });

  // Global prefix for APIs
  app.setGlobalPrefix('api');

  // Global validation pipe (e.g., class-validator in DTOs)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,         // Strip unknown properties
      forbidNonWhitelisted: true, // Throw if unknown properties
      transform: true,         // Transform payloads to DTO instances
    }),
  );

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}/api`);
}
bootstrap();

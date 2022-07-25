import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { AllExceptionsFilter } from './config/any-exception.filter';
import { TransformInterceptor } from './config/transform.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter())
  app.enableCors()
  await app.listen(4080);
}
bootstrap();

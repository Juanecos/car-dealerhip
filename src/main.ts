import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist:true, // esto remueve las propiedades que no pasan la validacion del dto
			forbidNonWhitelisted:true, // si incluyo este no admite propiedades que no existen, sino que arrojan error
		}),
	)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

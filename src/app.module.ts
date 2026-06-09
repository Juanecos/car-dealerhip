import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';


// modulo principal, aqui iran referencias a otros modulos y servicios
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

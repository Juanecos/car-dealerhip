import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';


// modulo principal, aqui iran referencias a otros modulos y servicios
@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

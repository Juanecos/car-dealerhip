import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { Brand } from '../brands/entities/brand.entity';

@Injectable()
export class SeedService {
	
	constructor(
		private readonly CarsService: CarsService,
		private readonly BrandsService: BrandsService,
	){}
		private executedSeed = false


  populateDB() {

		if (!this.executedSeed) {
			this.CarsService.fillCarsWithSeedData(CARS_SEED);
			this.BrandsService.fillBrandsWithSeedData(BRANDS_SEED);
			this.executedSeed = !this.executedSeed;

			return 'seed ejecutado';
		}
		return 'seed ya habia sido ejecutado'
  }

}

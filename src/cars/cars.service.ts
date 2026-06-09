import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

import {v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {

	private cars : Car[] = [
		{
			id: uuid(),
			brand:'Toyota', 
			model:'Corolla',
		},
		{
			id: uuid(),
			brand:'Ford',
			model:'Mustang',
		},
		{
			id: uuid(),
			brand:'kia',
			model:'Rio',
		}
	];

	findAll(){
		return this.cars;
	}

	findOne(id: string) {
		const car = this.cars.find(car => car.id === id) ?? null;

		if (!car) throw new NotFoundException(`Carro con id ${id} no encontrado`);

		return car;
	}

	
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

import {v4 as uuid} from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';

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

	createCar (CreateCarDto : CreateCarDto){
		const newCar : Car = {
			id: uuid(),
			// ,,,createCarDto
			brand: CreateCarDto.brand,
			model: CreateCarDto.model
		}
		// this.cars.push(newCar);
		this.cars = [ ...this.cars, newCar];
		return newCar
	}	

	update(id:string, UpdateCarDto : UpdateCarDto) {
		
		let carDB = this.findOne(id);
		this.cars = this.cars.map(
			(car) => {
				if (car.id === id){
					carDB = { ...carDB, ...UpdateCarDto, id }
				}
				return carDB;
			}
		)
		return carDB;
	}

	delete(id:string){
		let car = this.findOne(id);
		this.cars = this.cars.filter(car => car.id !== id)
		
	}

}

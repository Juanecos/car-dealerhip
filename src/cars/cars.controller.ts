import { Controller, Get, Post, NotFoundException, Param, ParseIntPipe, Body, Patch, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
		
	constructor(
		private readonly CarsService: CarsService
	){}

	@Get()
	getAllCars() {
			return this.CarsService.findAll();
	}

  @Get(':id')
	gerCarById(@Param('id',new ParseUUIDPipe ({version:'4'})) id: string) {
		console.log('id', id);
		return this.CarsService.findOne(id);
	}

	@Post()
	createCar(@Body() createCarDto: CreateCarDto){
		return this.CarsService.createCar(createCarDto);
	}

	@Patch(':id')
	updateCar(
		@Param('id', ParseUUIDPipe) id:string,
		@Body() UpdateCarDto: UpdateCarDto
	){
		return this.CarsService.update(id, UpdateCarDto);
	}

	@Delete(':id')
	deleteCar(@Param('id', ParseUUIDPipe) id: string) {
		// return {method: 'delete', id};
		return this.CarsService.delete(id);
	}
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

	private  brands : Brand[] = [
		{
			id: uuid(),
			name: 'Toyota',
			createdAt: new Date().getTime()
		}
	]

  create(createBrandDto: CreateBrandDto) {
		const { name } = createBrandDto;
		const brand: Brand = {
			id : uuid(),
			name: name.toLowerCase(),
			createdAt: new Date().getTime(),
		}
		
		this.brands.push( brand )

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
		const brand = this.brands.find(brand => brand.id === id) ?? null;
		if (!brand) throw new NotFoundException(`Marca con id ${id} no encontrada`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
		
		let brandDB : Brand = this.findOne(id);

		this.brands = this.brands.map(
			(brand : Brand) => {
				if (brand.id === id) {
					brandDB.updatedAt = new Date().getTime();
					brandDB = {...brandDB, ...updateBrandDto}
					return brandDB;
				}
				return brand;
			}
		);
    return brandDB;
  }

  remove(id: string) {
		const obj = this.findOne(id);
		this.brands = this.brands.filter(brand => brand.id !== id)
    return {
			action:'delete',
			object : obj
		};
  }
	fillBrandsWithSeedData (brands: Brand[]){
		this.brands = brands
	}
	
}

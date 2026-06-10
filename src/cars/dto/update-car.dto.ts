import {IsString, IsNotEmpty, MinLength, IsOptional} from 'class-validator';

export class UpdateCarDto {
	
	@IsNotEmpty()
	@IsString()
	@IsOptional()
	readonly id?: string
	
	@IsString({ message: 'La marca debe ser texto' })
	@IsNotEmpty({ message: 'Pon una marca por favor' })
	@IsOptional()
	readonly brand?: string;

	@IsString({ message: 'El modelo debe ser texto' })
	@IsNotEmpty({ message: 'Pon un modelo por favor' })
	@IsOptional()
	@MinLength(3, {message: 'Solo admite mas de 3 letras'})
	readonly model?: string;

}
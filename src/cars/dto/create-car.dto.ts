import {IsString, IsNotEmpty} from 'class-validator';

export class CreateCarDto {

	@IsString({ message: 'La marca debe ser texto' })
	@IsNotEmpty({ message: 'Pon una marca por favor' })
	readonly brand!: string;

	@IsString({ message: 'El modelo debe ser texto' })
	@IsNotEmpty({ message: 'Pon un modelo por favor' })
	readonly model!: string;

}
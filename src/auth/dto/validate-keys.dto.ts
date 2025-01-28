// src/auth/dto/validate-keys.dto.ts
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ValidateKeysDto {
  @IsNumber({}, { message: 'El campo no puede ser un string' })
  @IsNotEmpty({ message: 'El campo no puede venir basio' })
  schema: number;

  @IsString({ message: 'El campo no puede ser un numerico' })
  @IsNotEmpty({ message: 'El campo no puede venir basio' })
  schema2: string;

  constructor(schema: number, schema2: string) {
    this.schema = schema;
    this.schema2 = schema2;
  }
}

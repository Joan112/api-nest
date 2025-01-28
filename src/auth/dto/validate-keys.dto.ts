// src/auth/dto/validate-keys.dto.ts
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ValidateKeysDto {
  @IsNumber()
  @IsNotEmpty()
  schema: number;

  @IsString()
  @IsNotEmpty()
  schema2: string;
}

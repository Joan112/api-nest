import { IsString, IsNotEmpty } from 'class-validator';

export class ValidateKeysDto {
  @IsString()
  @IsNotEmpty()
  schema!: string;

  @IsString()
  @IsNotEmpty()
  schema2!: string;
}

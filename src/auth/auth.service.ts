import { Injectable } from '@nestjs/common';
import { ValidateKeysDto } from './dto/validate-keys.dto';

@Injectable()
export class AuthService {
  validateKeys(keys: ValidateKeysDto): ValidateKeysDto {
    // Aquí puedes agregar lógica adicional para validar los datos si es necesario
    return keys;
  }
}

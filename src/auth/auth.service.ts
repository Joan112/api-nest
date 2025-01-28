import { Injectable } from '@nestjs/common';
import { ValidateKeysDto } from './dto/validate-keys.dto';
import { Response } from '../interfaces/interfaces.interface';

@Injectable()
export class AuthService {
  validateKeys(keys: ValidateKeysDto): Response<ValidateKeysDto> {
    // Aquí puedes agregar lógica adicional para validar los datos si es necesario
    return {
      data: keys,
      success: true,
      message: 'Keys validated successfully',
      timestamp: new Date().toISOString(),
    };
  }
}

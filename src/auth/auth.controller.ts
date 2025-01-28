// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidateKeysDto } from './dto/validate-keys.dto';
import { Response } from '../interfaces/interfaces.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('provider')
  async auth(
    @Body() keys: ValidateKeysDto,
  ): Promise<Response<ValidateKeysDto>> {
    console.log(keys);
    // Pasa los datos al servicio para validarlos y retornarlos
    return this.authService.validateKeys(keys);
  }
}

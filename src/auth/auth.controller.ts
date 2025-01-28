import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidateKeysDto } from './dto/validate-keys.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('provider')
  async auth(@Body() keys: ValidateKeysDto) {
    console.log(keys);
    // Pasa los datos al servicio para validarlos y retornarlos
    return this.authService.validateKeys(keys);
  }
}

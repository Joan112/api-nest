import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';
import { Response } from '../interfaces/interfaces.interface';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getData(): Response<string[]> {
    return this.dataService.getData();
  }
}

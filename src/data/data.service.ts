import { Injectable } from '@nestjs/common';
import { Response } from '../interfaces/interfaces.interface';

@Injectable()
export class DataService {
  private readonly data: string[] = ['Item1', 'Item2', 'Item3'];

  getData(): Response<string[]> {
    return {
      data: this.data,
      success: true,
      message: 'Data retrieved successfully',
      timestamp: new Date().toISOString(),
    };
  }
}

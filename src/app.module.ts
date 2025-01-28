import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DataService } from './data/data.service';
import { DataModule } from './data/data.module';

@Module({
  imports: [AuthModule, DataModule],
  providers: [DataService],
})
export class AppModule {}

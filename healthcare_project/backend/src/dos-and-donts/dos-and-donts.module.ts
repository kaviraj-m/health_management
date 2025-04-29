import { Module } from '@nestjs/common';
import { DosAndDontsController } from './dos-and-donts.controller';
import { DosAndDontsService } from './dos-and-donts.service';

@Module({
  controllers: [DosAndDontsController],
  providers: [DosAndDontsService],
  exports: [DosAndDontsService],
})
export class DosAndDontsModule {} 
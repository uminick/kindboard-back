import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KrtrkaacontrollerController } from './krtrkaacontroller/krtrkaacontroller.controller';
import { KRTRKAAService } from './krtrkaa.service';

@Module({
  imports: [],
  controllers: [AppController, KrtrkaacontrollerController],
  providers: [AppService, KRTRKAAService],
})
export class AppModule {}

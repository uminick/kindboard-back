import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KrtrkaacontrollerController } from './krtrkaacontroller/krtrkaacontroller.controller';

@Module({
  imports: [],
  controllers: [AppController, KrtrkaacontrollerController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { KrtrkaacontrollerController } from './krtrkaacontroller.controller';

describe('KrtrkaacontrollerController', () => {
  let controller: KrtrkaacontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KrtrkaacontrollerController],
    }).compile();

    controller = module.get<KrtrkaacontrollerController>(KrtrkaacontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

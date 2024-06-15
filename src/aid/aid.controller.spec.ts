import { Test, TestingModule } from '@nestjs/testing';
import { AidController } from './aid.controller';

describe('AidController', () => {
  let controller: AidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AidController],
    }).compile();

    controller = module.get<AidController>(AidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

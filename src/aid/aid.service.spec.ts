import { Test, TestingModule } from '@nestjs/testing';
import { AidService } from './aid.service';

describe('AidService', () => {
  let service: AidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AidService],
    }).compile();

    service = module.get<AidService>(AidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

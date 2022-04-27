import { Test, TestingModule } from '@nestjs/testing';
import { VacunaController } from './vacuna.controller';

describe('VacunaController', () => {
  let controller: VacunaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacunaController],
    }).compile();

    controller = module.get<VacunaController>(VacunaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

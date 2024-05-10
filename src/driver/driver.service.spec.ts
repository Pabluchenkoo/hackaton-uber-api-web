import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';
import { DriverService } from './driver.service';

describe('DriverService', () => {
  let service: DriverService;
  let repository: Repository<Driver>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriverService,
        {
          provide: getRepositoryToken(Driver),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<DriverService>(DriverService);
    repository = module.get<Repository<Driver>>(getRepositoryToken(Driver));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a driver', async () => {
    const driver = new Driver();
    driver.name = 'John Doe';
    driver.email = 'john@example.com';
    driver.phoneNumber = '1234567890';

    jest.spyOn(repository, 'save').mockResolvedValue(driver);
    expect(await service.create(driver)).toEqual(driver);
  });

  it('should find all drivers', async () => {
    const drivers = [new Driver()];
    jest.spyOn(repository, 'find').mockResolvedValue(drivers);
    expect(await service.findAll()).toEqual(drivers);
  });

  it('should remove a driver', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(undefined);
    expect(await service.remove(1)).toBeUndefined();
  });
});

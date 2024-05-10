import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;
  let repository: Repository<Car>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarService,
        {
          provide: getRepositoryToken(Car),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CarService>(CarService);
    repository = module.get<Repository<Car>>(getRepositoryToken(Car));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a car', async () => {
    const car = new Car();
    car.model = 'Toyota Prius';
    car.licensePlate = 'ABC123';

    jest.spyOn(repository, 'save').mockResolvedValue(car);
    expect(await service.create(car)).toEqual(car);
  });

  it('should find all cars', async () => {
    const cars = [new Car()];
    jest.spyOn(repository, 'find').mockResolvedValue(cars);
    expect(await service.findAll()).toEqual(cars);
  });

  it('should remove a car', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(undefined);
    expect(await service.remove(1)).toBeUndefined();
  });
});

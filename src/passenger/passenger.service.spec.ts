import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passenger } from './passenger.entity';
import { PassengerService } from './passenger.service';

describe('PassengerService', () => {
  let service: PassengerService;
  let repository: Repository<Passenger>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PassengerService,
        {
          provide: getRepositoryToken(Passenger),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PassengerService>(PassengerService);
    repository = module.get<Repository<Passenger>>(getRepositoryToken(Passenger));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a passenger', async () => {
    const passenger = new Passenger();
    passenger.name = 'Jane Doe';
    passenger.email = 'jane@example.com';
    passenger.phoneNumber = '0987654321';

    jest.spyOn(repository, 'save').mockResolvedValue(passenger);
    expect(await service.create(passenger)).toEqual(passenger);
  });

  it('should find all passengers', async () => {
    const passengers = [new Passenger()];
    jest.spyOn(repository, 'find').mockResolvedValue(passengers);
    expect(await service.findAll()).toEqual(passengers);
  });

  it('should remove a passenger', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(undefined);
    expect(await service.remove(1)).toBeUndefined();
  });
});

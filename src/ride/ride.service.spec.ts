import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ride } from './ride.entity';
import { RideService } from './ride.service';

describe('RideService', () => {
  let service: RideService;
  let repository: Repository<Ride>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RideService,
        {
          provide: getRepositoryToken(Ride),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<RideService>(RideService);
    repository = module.get<Repository<Ride>>(getRepositoryToken(Ride));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a ride', async () => {
    const ride = new Ride();
    ride.fare = 50;
    ride.status = 'requested';

    jest.spyOn(repository, 'save').mockResolvedValue(ride);
    expect(await service.create(ride)).toEqual(ride);
  });

  it('should find all rides', async () => {
    const rides = [new Ride()];
    jest.spyOn(repository, 'find').mockResolvedValue(rides);
    expect(await service.findAll()).toEqual(rides);
  });

  it('should remove a ride', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(undefined);
    expect(await service.remove(1)).toBeUndefined();
  });
});

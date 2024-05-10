import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;
  let repository: Repository<Location>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationService,
        {
          provide: getRepositoryToken(Location),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<LocationService>(LocationService);
    repository = module.get<Repository<Location>>(getRepositoryToken(Location));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a location', async () => {
    const location = new Location();
    location.latitude = 40.7128;
    location.longitude = -74.0060;

    jest.spyOn(repository, 'save').mockResolvedValue(location);
    expect(await service.create(location)).toEqual(location);
  });

  it('should find all locations', async () => {
    const locations = [new Location()];
    jest.spyOn(repository, 'find').mockResolvedValue(locations);
    expect(await service.findAll()).toEqual(locations);
  });

  it('should remove a location', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(undefined);
    expect(await service.remove(1)).toBeUndefined();
  });
});

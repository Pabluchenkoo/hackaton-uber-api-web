import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  create(location: Location): Promise<Location> {
    return this.locationRepository.save(location);
  }

  async remove(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }
}

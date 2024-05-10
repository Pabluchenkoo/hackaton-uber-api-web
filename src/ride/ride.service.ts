import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ride } from './ride.entity';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private readonly rideRepository: Repository<Ride>,
  ) {}

  findAll(): Promise<Ride[]> {
    return this.rideRepository.find({ relations: ['driver', 'passenger', 'pickupLocation', 'dropoffLocation'] });
  }

  create(ride: Ride): Promise<Ride> {
    return this.rideRepository.save(ride);
  }

  async remove(id: number): Promise<void> {
    await this.rideRepository.delete(id);
  }
}

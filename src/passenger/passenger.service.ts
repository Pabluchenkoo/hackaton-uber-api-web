import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passenger } from './passenger.entity';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(Passenger)
    private readonly passengerRepository: Repository<Passenger>,
  ) {}

  findAll(): Promise<Passenger[]> {
    return this.passengerRepository.find();
  }

  create(passenger: Passenger): Promise<Passenger> {
    return this.passengerRepository.save(passenger);
  }

  async remove(id: number): Promise<void> {
    await this.passengerRepository.delete(id);
  }
}

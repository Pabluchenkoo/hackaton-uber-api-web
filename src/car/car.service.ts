import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }

  async remove(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}

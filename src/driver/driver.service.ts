import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}

  findAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  create(driver: Driver): Promise<Driver> {
    return this.driverRepository.save(driver);
  }

  async remove(id: number): Promise<void> {
    await this.driverRepository.delete(id);
  }
}

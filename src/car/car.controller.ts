import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Post()
  create(@Body() car: Car): Promise<Car> {
    return this.carService.create(car);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.carService.remove(id);
  }
}

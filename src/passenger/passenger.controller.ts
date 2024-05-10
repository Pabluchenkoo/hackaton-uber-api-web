import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { Passenger } from './passenger.entity';

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Get()
  findAll(): Promise<Passenger[]> {
    return this.passengerService.findAll();
  }

  @Post()
  create(@Body() passenger: Passenger): Promise<Passenger> {
    return this.passengerService.create(passenger);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.passengerService.remove(id);
  }
}

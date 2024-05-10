import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { RideService } from './ride.service';
import { Ride } from './ride.entity';

@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Get()
  findAll(): Promise<Ride[]> {
    return this.rideService.findAll();
  }

  @Post()
  create(@Body() ride: Ride): Promise<Ride> {
    return this.rideService.create(ride);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rideService.remove(id);
  }
}

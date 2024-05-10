import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }


  @Post()
  create(@Body() location: Location): Promise<Location> {
    return this.locationService.create(location);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.locationService.remove(id);
  }
}

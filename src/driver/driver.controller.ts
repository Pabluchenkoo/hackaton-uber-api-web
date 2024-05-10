import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from './driver.entity';

@Controller('drivers')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  findAll(): Promise<Driver[]> {
    return this.driverService.findAll();
  }

  @Post()
  create(@Body() driver: Driver): Promise<Driver> {
    return this.driverService.create(driver);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.driverService.remove(id);
  }
}

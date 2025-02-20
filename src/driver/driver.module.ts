import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './driver.entity';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}

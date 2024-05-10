import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './passenger.entity';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  providers: [PassengerService],
  controllers: [PassengerController],
})
export class PassengerModule {}

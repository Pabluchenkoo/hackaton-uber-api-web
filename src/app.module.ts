import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { PassengerModule } from './passenger/passenger.module';
import { RideModule } from './ride/ride.module';
import { CarModule } from './car/car.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    DriverModule,
    PassengerModule,
    RideModule,
    CarModule,
    LocationModule,
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'db', 
      port: 5432,        
      username: 'hackaton', 
      password: 'qwerty123', 
      database: 'uber_db',
      autoLoadEntities: true,
      synchronize: true, 
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

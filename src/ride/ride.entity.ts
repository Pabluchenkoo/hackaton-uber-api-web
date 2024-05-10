import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Driver } from '../driver/driver.entity';
import { Passenger } from '../passenger/passenger.entity';
import { Location } from '../location/location.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fare: number;

  @Column()
  status: string; // e.g., 'requested', 'in-progress', 'completed'

  @ManyToOne(() => Driver, driver => driver.rides)
  driver: Driver;

  @ManyToOne(() => Passenger, passenger => passenger.rides)
  passenger: Passenger;

  @ManyToOne(() => Location, location => location.pickupRides)
  pickupLocation: Location;

  @ManyToOne(() => Location, location => location.dropoffRides)
  dropoffLocation: Location;
}

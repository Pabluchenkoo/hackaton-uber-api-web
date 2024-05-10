import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ride } from '../ride/ride.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToMany(() => Ride, ride => ride.pickupLocation)
  pickupRides: Ride[];

  @OneToMany(() => Ride, ride => ride.dropoffLocation)
  dropoffRides: Ride[];
}

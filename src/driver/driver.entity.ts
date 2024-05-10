import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Ride } from '../ride/ride.entity';
import { Car } from '../car/car.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => Ride, ride => ride.driver)
  rides: Ride[];

  @ManyToOne(() => Car, car => car.drivers)
  car: Car;
}
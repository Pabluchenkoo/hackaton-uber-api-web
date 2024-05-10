import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Driver } from '../driver/driver.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  licensePlate: string;

  @OneToMany(() => Driver, driver => driver.car)
  drivers: Driver[];
}

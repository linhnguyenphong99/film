import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ProductionCountry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: string;

  @Column()
  country_id: string;
}

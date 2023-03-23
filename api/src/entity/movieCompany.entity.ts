import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MovieCompagny {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: string;

  @Column()
  company_id: string;
}

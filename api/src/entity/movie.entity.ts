import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  budget: string;

  @Column()
  homepage: string;

  @Column()
  overview: string;

  @Column()
  poppularity: string;

  @Column()
  release_date: string;

  @Column()
  revenue: string;

  @Column()
  runtime: string;

  @Column()
  status: string;

  @Column()
  tagline: string;

  @Column()
  votes_avg: string;

  @Column()
  vote_count: string;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MovieGenre {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: string;

  @Column()
  genre_id: string;
}

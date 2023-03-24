import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MovieCast {
  @PrimaryGeneratedColumn() id: number;

  @Column() movie_id: string;

  @Column() gender_id: string;

  @Column() person_id: string;

  @Column() character_name: string;

  @Column() cast_order: string;
}

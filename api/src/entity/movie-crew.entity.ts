import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MovieCrew {

  @PrimaryGeneratedColumn() id: number;

  @Column() movie_id: string;

  @Column() person_id: string;

  @Column() department_id: string;

  @Column() job: string;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MovieKeyword {

  @PrimaryGeneratedColumn() id: number;

  @Column() movie_id: string;

  @Column() keyword_id: string;
}

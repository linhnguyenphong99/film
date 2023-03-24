import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MovieLanguage {

  @PrimaryGeneratedColumn() id: number;

  @Column() movie_id: string;

  @Column() language_id: string;

  @Column() language_role_id: string;
}

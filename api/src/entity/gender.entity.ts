import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Gender {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;
}

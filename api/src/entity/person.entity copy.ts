import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Person {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Department {

  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column() username: string;

  @Column() password: string;
}

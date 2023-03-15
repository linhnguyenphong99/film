import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  username: string;

  @Column({ default: 1 })
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: 1 })
  mail: string;

  @Column({ default: true })
  isActive: boolean;
}

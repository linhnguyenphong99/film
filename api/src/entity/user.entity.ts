import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column() username: string;

  @Column() password: string;

  @BeforeInsert()
  async setPassword(password: string) {
    this.password = password
  }
}

@Entity()
export class Pet {
  @PrimaryGeneratedColumn() id: string
  @Column() name: string
  @Column() age: number
  user: User
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class LanguageRole {
  @PrimaryGeneratedColumn() id: number;

  @Column() role: string;
}

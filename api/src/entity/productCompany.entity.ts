import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ProductCompany {

  @PrimaryGeneratedColumn() id: number;

  @Column() company_id: string;

  @Column() company_name: string;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { Article } from './article';

@Entity()
export class Tag extends BaseEntity {

  @Column({ length: 32, unique: true })
  name: string;
}

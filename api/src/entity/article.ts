import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import {BaseEntity} from "./baseEntity";

@Entity()
export class Article extends BaseEntity{

    @Column({length:128,unique:true})
    title: string;

    @Column({type:"text"})
    content:string;

    @Column({default:0})
    viewNum:number;
}

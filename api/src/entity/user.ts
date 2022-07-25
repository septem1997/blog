import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import {BaseEntity} from "./baseEntity";
import { Article } from './article';

@Entity()
export class User extends BaseEntity{

    @Column({comment:'用户名',length:32})
    username: string;

    @Column({comment:'用户昵称',length:32})
    nickname: string;

    @Column()
    avatar: string;

    @Column()
    password: string;

}

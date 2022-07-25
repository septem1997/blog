import {Tag} from "../entity/tag";

export class TagDto {
    id: number;
    name: string;
}

export class ArticleDto {
    id?:number;
    title:string;
    content:string;
    createTime?:string;
}

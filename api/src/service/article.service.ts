import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {Admin} from '../entity/admin';
import {AdminDto} from '../dto/admin.dto';
import {Article} from '../entity/article';
import {Tag} from '../entity/tag';
import {ArticleDto} from "../dto/article.dto";
import {find} from "rxjs/operators";

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(Article)
        private repository: Repository<Article>,
        @InjectRepository(Tag)
        private roomTagRepository: Repository<Tag>,
    ) {
    }


    async getArticles(page: number, pageSize: number) {
        return await this.repository.find({
            select:['title',"createTime","viewNum"],
            where: {
                disabled: false
            },
            order: {
                createTime:'DESC'
            }
        })
    }

    async findByTitle(title: string) {
        const findOne = await this.repository.findOne({
            where: {
                title: title
            }
        })
        findOne.viewNum++
        this.repository.save(findOne)
        return findOne
    }


    async editArticle(article: ArticleDto) {
        const saveArticle = new Article();
        if (article.id) {
            const find = await this.repository.findOne(article.id);
            saveArticle.id = find.id
        }
        saveArticle.title = article.title
        saveArticle.content = article.content
        if (article.createTime){
            saveArticle.createTime = new Date(article.createTime)
        }
        return await this.repository.save(saveArticle);
    }
}

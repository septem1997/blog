import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../entity/article';
import { ArticleService } from '../service/article.service';
import { Tag } from '../entity/tag';
import { ArticleController } from '../controller/article.controller';
const reps = [TypeOrmModule.forFeature([Article]),TypeOrmModule.forFeature([Tag])];
@Module({
  imports: reps,
  controllers:[ArticleController],
  providers:[ArticleService],
  exports:[
    ...reps,ArticleService
  ]
})
export class ArticleModule {
}

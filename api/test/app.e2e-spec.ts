import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/module/app.module';
import {ArticleService} from "../src/service/article.service";

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let articleService:ArticleService
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    articleService = app.get<ArticleService>(ArticleService)
    await app.init();
  });

  it('编辑文章', () => {
    articleService.editArticle({
      content: "asdasd",
      title: "测试时间",
      createTime:'2017-01-01'
    })
  });
});

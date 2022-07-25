import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
  Req,
  UseGuards
} from '@nestjs/common';
import { ArticleService } from '../service/article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly roomService: ArticleService) {
  }

  @Get('list')
  async list(
      @Query("pageSize") pageSize: number,
      @Query("page") page: number
  ) {
    return await this.roomService.getArticles(page,pageSize)
  }

  @Get('detail')
  async detail(
      @Query("title") title: string,
  ) {
    return await this.roomService.findByTitle(title);
  }
}

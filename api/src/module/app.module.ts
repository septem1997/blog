import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin.module';
import { Admin } from '../entity/admin';
import { User } from '../entity/user';
import { ArticleModule } from './article.module';
import { Tag } from '../entity/tag';
import { Article } from '../entity/article';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123456',
      database: 'blog',
      entities: [Admin,User,Tag,Article],
      synchronize: true,
    }),
    UserModule,
    AdminModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}

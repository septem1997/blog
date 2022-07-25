import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../entity/admin';
import { User } from '../entity/user';
import {ArticleService} from "./article.service";
import {ArticleModule} from "../module/article.module";
import {Tag} from "../entity/tag";
import {Article} from "../entity/article";

describe('AppController', () => {
    let articleService: ArticleService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports:[
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
                ArticleModule
            ]
        }).compile();
        articleService = app.get<ArticleService>(ArticleService);
    });

    describe('root', () => {

        it('测试创建文章',async () => {
            const res = await articleService.editArticle({
                content:'<div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:12pt;text-indent:24pt">小学初中看金庸，越看越中二；高中看余华，则是激发了我感性的一面；现在上了大学，又轮到了王小波，他的文字给我带来最多的感受就是“哈哈哈哈”，但是笑完了又会回过头去思考他刚才所谈及的话题。记得第一次接触他的作品是在高中的时候，那时候每日一文这网站推了他的《一只特立独行的猪》上去，我当时看完就觉得挺有意思的，又往上滑去看作者的名字——王小波，以前好像隐隐约约有见过这名字，也许是这名字太过朴实无奇，当时并没有想查百度的冲动。之后不知过了多久，又在每日一文上看到了他的作品，这回是《椰子树与平等》，这次读完我对这个作者来了感兴趣，一查百度才知道原来他</span><span style="font-size:12pt;text-indent:24pt">45</span><span style="font-size:12pt;text-indent:24pt">岁的时候就病发去世了，但还是留下了不少作品。于是将他的《沉默的大多数》和《黄金时代》列入了我的书单中，不过不曾想到的是，我最先读完的却是他写给李银河的书信集《爱你就像爱生命》，我还不要脸的仿了他的其中一篇也写了封信，附在了送给某人的生日礼物里。</span><br></div><p style="text-indent:24.0pt"><span style="font-size:12.0pt">最近，知乎上又突然冒出几个关于他的问题，一时觉得诧异，但转念一想又不觉得了，因为四月到了，四月一到被第一个拉出来纪念的肯定是张国荣，而紧随其后的可能就是王小波了吧，他正好是<span>4</span>月<span>11</span>日去世的，一算刚好是他逝世二十周年，二十年真的不算短了，毕竟我自己也才刚过二十周岁生日不久，但是他的文字读来却还是有一种很新鲜的感觉，仿佛那些文字是他几个月前刚写就的，之所以给我这种感觉可能在于他的谈及的现象以及问题在二十年后的今天依旧存在着，这还真不是件值得高兴的事情，不过也侧面说明了他看问题真的看得很远，对中国以及中国人分析的也很透彻，在这事上我第一个佩服的是鲁迅，而第二个就是王小波了。也只有偶尔他谈及计算机相关的话题时我才意识到他真的已经离开很久了，有一回他说到去中关村只要<span>250</span>块就能买到八兆的内存，还觉得很便宜哩，若他能活到今天肯定要骂娘了吧，毕竟现在<span>250</span>块能买到的内存至少得有八千兆！不过他在骂完之后肯定又觉得很欣慰，因为他也是程序员啊，程序员总是乐意见到电子设备和计算机技术的升级换代。所以我有时也在想如果他能活到今天的话又会是怎样一番光景，他在他的文章提过他自己写文章用的输入法和编辑器都是他自己编的，在从事教育工作时也会编写一些数学统计和分析软件去辅助自己的教学工作，在那个程序员和技术资料都十分匮乏的年代实属不易，据说当时就有不少中关村的公司邀请他去当技术合伙人，不过他觉得写作比写软件赚钱，就没往这方面考虑。然而在之后的几年里中国的<span>IT</span>行业开始高速发展，如果他还活着的话说不定就忍不住诱惑跑去创业了，在这事上我越想越觉得可惜，是的，我觉得惋惜不单单只是因为他的文学作品，更因为他和我一样也是个程序员，这就给我带来了不少的亲近感，但是越亲近也就越觉得遗憾。<span></span></span></p><p style="text-indent:24.0pt"><span style="font-size:12.0pt">说到遗憾，我的遗憾算不上多，虽然我窝窝囊囊活了<span>20</span>年犯了不少浑，但是对自己的事情还算比较看得开，真有看不开的时候反而则是一些无关乎自己切身利益的事，比如我最爱看的电视剧《武林外传》，它只有前八十集，而后八十集则因为各种原因最终流产了，我对于这部剧后八十回的渴望并不亚于那些红学家对《红楼梦》后四十回的渴望，可幸的是我十年的期盼没白费，最后还是等到它的精神续作《龙门镖局》，虽然它达不到前者的高度，但我已经很满足了；再有就是我小时候玩的一款武侠游戏《武林群侠传》了，虽然它当时还只是个半成品，却也偷走了我许多儿时时光，于是我还是同样花<span>10</span>年去等它的完成品，也终于在高三暑假等来了。现在则是轮到了王小波，然而电视剧没有可以再拍、游戏没有还可以再做，人死了却没办法再向去找上帝要回来，最后只能带给他人永远都无法弥补的遗憾。<span></span></span></p><p style="text-indent:24.0pt"><span style="font-size:12.0pt">我这篇文章的题目是“遗憾”，但实质上我却是打着挂羊头卖狗肉的主意，挂“遗憾”的头，卖“珍惜生命”的观点，其实我也是最近才感受到生命的可贵，说来也是讽刺，真正重要的东西总是失去的人比拥有的人更清楚，不过转念一想也属常情，毕竟从一开始就背负着的东西只有在失去时才能了解到它的重量呵。太宰治曾经反问他的朋友：“是等待的人更痛苦呢<span>,</span>还是让人等待的人更痛苦呢？”，他的朋友怎么回答我不得而知，而我的答案是后者。现在我再借过来改一下：“是感到遗憾的人更痛苦呢，还是让人遗憾的人更痛苦呢？”，我的答案依旧是后者，毕竟活着的人痛苦那顶多痛苦一生，但要是死人也会痛苦的话那可要一直痛苦下去了，毕竟也没办法再去死一次，这感觉想想就难受。<span></span></span></p></div>',
                title:'谈谈遗憾',
                createTime:'2017-04-27 01:24'
            })
            console.log(res)
        })
    });
});

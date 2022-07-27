import styles from '../../assets/styles/resume.module.sass'
import Image from 'next/image'

const ResumePaper = ()=>{
  return <div className={styles.container}>
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.avatar}>
          <div className={styles['avatar-overlay']}>
            <div className={styles['avatar-img-box']}>
              <Image layout={'fill'} src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png'} />
            </div>
          </div>
        </div>
        <div className={styles.personInfo}>
          <div className={styles.name}>
            陈校培
          </div>
          <div className={styles.offer}>
            意向岗位：Web前端工程师 | 随时到岗
          </div>
          <div className={styles.info}>
            25岁 |
            750627595@qq.com |
            微信:septem1997 <br/>
            <div>吉林大学珠海学院 - 软件工程 | 本科</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          工作<br/>经历
        </div>
        <div className={styles.content}>
          <div className={styles['content-head']}>
            <div>2019.03~2022.05</div>
            <div>珠海新海通电子商务有限公司</div>
            <div>web前端工程师</div>
          </div>
          <div>
            <strong>岗位职责：</strong>担任前端主力开发，负责公司前端项目的技术选型，框架搭建和业务开发
            <div><strong>主要工作：</strong></div>
            <ul>
              <li>使用react + echarts图表插件开发公司经营数据可视化看板，响应式布局设计，完美适配高分屏</li>
              <li>重构基于electron重构pc端客服聊天系统，优化接口调用，提高程序响应时间</li>
              <li>搭建基于Vue + Antd UI库的商品后台管理系统，抽象业务逻辑封装通用组件，统一封装API请求接口</li>
              <li>使用Vue3.0+electron开发IM系统(仿钉钉设计)，实现了消息多端同步，消息本地持久化（indexDB），文件/消息发送fallback机制，消息撤回，实时视频语音等功能</li>
              <li>开发低代码OA审批系统（仿飞书设计），实现了拖拽生成动态表单，表单嵌套，审批节点分支流程创建，流程分支条件判断，表单与节点数据联动等功能</li>
            </ul>
          </div>

          <div className={styles['content-head']}>
            <div>2018.07~2019.02</div>
            <div>珠海金刚科技有限公司</div>
            <div>全栈开发工程师</div>
          </div>
          <div>
            <strong>岗位职责：</strong>担任公司前端开发赌场账房系统，并负责数据报表统计导出相关后端业务
            <div><strong>主要工作：</strong></div>
            <ul>
              <li>以非侵入式方式重写ajax请求，添加了拦截器，复用代码，提高接口调用开发效率</li>
              <li>完善单据打印功能，利用Promise特性解决了打印顺序不同步的问题，封装打印公共方法，降低了同类需求开发成本</li>
              <li>改进前端框架，独立编写了国际化多语言模块，使得公司产品可面向海外用户</li>
              <li>改进数据报表导出功能，利用webSocket技术分离了数据报表导出等耗时操作</li>
            </ul>
          </div>
          <div className={styles['content-head']}>
            <div>2017.07~2018.06</div>
            <div>小笋科技(深圳)有限公司</div>
            <div>全栈开发工程师</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责公司共享单车小程序、微信公众号和商家运营推广平台的开发
            <div><strong>主要工作：</strong></div>
            <ul>
              <li>基于WebSocket开发了客服系统(web端和小程序端)，可发送图片、语音和位置，具有聊天记录本地缓存和线上同步等功能</li>
              <li>利用JAVA反射和注解实现了前端html代码自动生成，减少此类重复繁琐的开发工作，让团队更专注于其他特殊需求</li>
              <li>基于POI和JAVA反射技术实现了excel表格导出自动化工具，市场部人员无需了解sql知识即可根据自己需求导出表格数据，极大减少繁杂多样的sql查询需求工作</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          个人<br/>作品
        </div>
        <div className={styles.content}>
          <div className={styles['content-head']}>
            <div>共享弹幕</div>
            <div>移动端APP</div>
          </div>
          <div>
            <div><strong>技术栈：</strong>Android | Flutter | Node.js | Mysql | WebSocket</div>
            <div>
              <strong>项目简介：</strong>一个全局弹幕聊天工具，适用于和小伙伴一起看电影看直播或者玩游戏等场景，在这种场景下你想和小伙伴分享或者吐槽时可直接发送弹幕消息，解决了各大直播和视频平台的弹幕功能无法创建房间的痛点
            </div>
          </div>
          <div className={styles['content-head']}>
            <div>每日一文UWP</div>
            <div>PC端APP</div>
          </div>
          <div>
            <div><strong>技术栈：</strong>UWP | Node.js | Mysql</div>
            <div>
              <strong>项目简介：</strong>一款win10端文章阅读类应用，每天自动更新推送一篇优质文章，并集成评论区功能，目前已在win10应用商店上架，搜索名字即可体验
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          专业<br/>技能
        </div>
        <div className={styles.content}>
          <ul>
            <li>编程语言：HTML5，CSS3，JavaScript，TypeScript，Java，Dart</li>
            <li>前端框架：Vue，React，Electron，jQuery，Flutter，小程序</li>
            <li>后端框架：Node.js，SpringBoot</li>
            <li>其他：Git，PS，MySql，WebSocket，Linux</li>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          自我<br/>评价
        </div>
        <div className={styles.content} style={{border:'none'}}>
          <ul>
            <li>热爱编程，善于利用编程解决生活中遇到的问题，能主动学习并不断更新自身技能</li>
            <li>熟悉常见的数据结构和算法，可从零独立开发应用，包括前端页面编写、数据库设计、服务器接口编写及最终部署上线</li>
            <li>良好的产品审美，能独立、按时按量完成工作中的任务，并协助他人工作，勇于沟通</li>
            <li>具有一定的英语和源码阅读能力，能熟练使用Google、StackOverflow、GitHub等平台解决工作中遇到的问题</li>
          </ul>
        </div>
      </div>
      <div className={styles.qrCode}>
        <div className={styles['qrCode-box']}>
          <Image loading={'eager'} width={128} height={128} layout={'fill'} src="https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/qrCode.png"/>
          <div>线上简历</div>
        </div>
      </div>
    </div>
  </div>
}

export default ResumePaper

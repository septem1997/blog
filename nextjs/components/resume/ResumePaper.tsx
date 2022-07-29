import styles from '../../assets/styles/resume.module.sass'
import Image from 'next/image'

const ResumePaper = () => {
  return <div className={styles.container}>
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.avatar}>
          <div className={styles['avatar-overlay']}>
            <div className={styles['avatar-img-box']+ ' not-print'}>
              <Image className={'not-print'} layout={'fill'} src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png'} />
            </div>
            <div className={styles['avatar-img-box']+' only-print'}>
              <Image loading={'eager'} layout={'fill'} src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/avatar2.jpg'} />
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
            <span className={'not-print'}> 微信:septem1997</span>
            <span className={'only-print'}> 手机:16675644396</span>
            <br />
            <div>吉林大学珠海学院 - 软件工程 | 本科</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          工作<br />经历
        </div>
        <div className={styles.content}>
          <div className={styles['content-head']}>
            <div>2019.03~2022.05</div>
            <div>珠海新海通电子商务有限公司</div>
            <div>web前端工程师</div>
          </div>
          <div>
            <strong>岗位职责：</strong>担任前端负责人，负责公司前端项目的技术选型，框架搭建和业务开发
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>使用react + echarts图表插件开发公司经营数据可视化看板，响应式布局设计，完美适配高分屏</li>
              <li>重构基于electron的pc端客服聊天系统，优化接口调用，提高程序响应时间</li>
              <li>开发工作事项笔记工具H5 APP，可添加无限级的任务事项嵌套以及工作事项的流转</li>
              <li>搭建基于Vue + Antd UI库的商品后台管理系统，抽象业务逻辑封装通用组件，统一封装API请求接口</li>
              <li>使用Vue3.0+electron+TypeScript开发即时聊天(IM)工具，实现了消息多端同步，已读未读，消息本地持久化，文件/消息发送fallback机制，消息撤回，实时视频语音等功能</li>
              <li>开发低代码OA审批系统，实现了拖拽生成动态表单，表单嵌套，审批节点分支流程创建，流程分支条件判断，表单与节点数据联动等功能</li>
            </ol>
          </div>

          <div className={styles['content-head']}>
            <div>2018.07~2019.02</div>
            <div>珠海金刚科技有限公司</div>
            <div>全栈开发工程师</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责赌场账房系统前端的开发，以及数据报表统计、表格导出等后端功能的实现
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>以非侵入式方式重写Jq Ajax请求，添加了拦截器，提高接口调用开发效率</li>
              <li>完善单据打印功能，利用Promise特性解决了打印顺序不同步的问题，封装打印公共方法，降低了同类需求开发成本</li>
              <li>改进前端框架，独立编写了国际化多语言模块，使得公司产品可面向海外用户</li>
              <li>使用Apache POI实现了带有数据筛选，分类汇总，表头冻结的Excel表格导出，改进数据报表导出功能，利用MQ分离了数据报表导出耗时操作，搭配WebSocket在报表导出完成时推送给前端</li>
            </ol>
          </div>
          <div className={styles['content-head']}>
            <div>2017.07~2018.06</div>
            <div>小笋科技(深圳)有限公司</div>
            <div>全栈开发工程师</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责公司共享单车小程序、微信公众号和商家运营推广平台的开发
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>基于WebSocket开发了客服系统，可发送图片、语音和位置，具有聊天记录本地缓存和线上同步等功能</li>
              <li>利用JAVA反射和注解实现了前端表格增删改查html代码自动生成，减少此类重复繁琐的开发工作，让团队更专注于其他特殊需求</li>
              <li>基于Apache POI和JAVA反射技术开发了excel表格导出自动化工具，运营人员无需了解sql知识即可根据自己需求导出表格数据，极大减少繁杂多样的sql查询需求工作</li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          主要<br />项目
        </div>
        <div className={styles.content}>
          <div className={styles['content-head']}>
            <div>即时聊天(IM)工具</div>
            <div>PC端应用</div>
          </div>
          <div>
            <div><strong>项目简介：</strong>基于Electron+Vue3+TypeScript开发的IM工具，跨多端（浏览器、Windows、mac OS）项目</div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
              <li>
                适配了Windows端和mac OS端，实现了以声音、任务栏托盘、气泡弹窗等形式的消息通知，基于Canvas实现了截图工具，根据运行环境适配不同交互
              </li>
              <li>使用event bus实现了消息的分发，采用IndexedDB实现了消息和联系人数据的持久化，聊天记录本地查询，减轻了服务器负担</li>
              <li>
                采用富文本编辑器实现了聊天文本输入框，开发了群聊@人员插件；
                开发了图片表情插入插件；
                实现了一个简单的AST，完成了文本编辑器HTML文本到JSON消息文本再到聊天文本的解析，转换与渲染
              </li>
              <li>
                基于Node.js开发了文件下载器，实现了快捷键粘贴和拖拽发送文件，实时显示文件上传、下载进度
              </li>
              <li>利用IntersectionObserver API实现了消息已读、未读功能，并采用虚拟dom展示消息列表和联系人列表，提高渲染性能</li>
              <li>
                实现了消息发送fallback机制，编写了消息发送队列，使得在极端网络环境下发送失败时自动重新发送消息
              </li>
              <li>
                使用iframe将IM嵌入到商城项目中，并使用postMessage完成IM与商城间的通信
              </li>
            </ol>
          </div>
          <div className={styles['content-head']}>
            <div>OA审批系统</div>
            <div>PC Web端</div>
          </div>
          <div><strong>项目简介：</strong>基于Vue2开发的OA审批系统，零代码创建自由表单、自由审批流程</div>
          <div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
              <li>
                开发了通用的无限级树形部门人员选择控件，实现了展开异步加载数据，部门、人员级联选择功能，全选和半选功能
              </li>
              <li>大量使用JSX开发了20多种基础控件（文本、数字、金额输入框，单选、多选框，文件、图片上传，部门人员选择，时间选择等控件），
                并实现了拖拽基础控件生成自由表单功能，实现了控件的表单验证以及权限功能</li>
              <li>
                开发了自由审批流程控件，实现了流程条件分支判断，支持按单选多选框、数字输入框（大于/小于/等于），部门人员等多种条件配置不同的审批流程
              </li>
              <li>
                开发了表单套件控件，支持在控件中嵌套基础控件；开发了计算器控件，支持在计算器配置中联动数字、金额输入框等控件作为算式因子，并实时计算
              </li>
            </ol>
          </div>
          <div className={styles['content-head']}>
            <div>共享单车</div>
            <div>微信公众号、小程序</div>
          </div>
          <div><strong>项目简介：</strong>依托微信公众号和小程序的共享单车平台</div>
          <div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
              <li>
                基于高德SDK开发共享单车地图，利用API实现定位，附近单车图标渲染，找车路径规划，骑行路线渲染等功能
              </li>
              <li>
                基于Jq和Bootstrap组件库编写后台管理系统，实现单车，商家，单车停车点等实体的增删改查，利用Java反射技术在实体类的字段添加自定义注解，自动生成HTML+JS增删改查模板代码
              </li>
              <li>
                编写了excel数据报表导出工具，根据已选择的实体类字段以及判断条件生成Mysql select语句，组装查询结果，搭配Apache POI生成Excel表格导出
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          个人<br />项目
        </div>
        <div className={styles.content}>
          <div className={styles['content-head']}>
            <div>巴士到哪了</div>
            <div>H5 APP</div>
          </div>
          <div>
            <div><strong>技术栈：</strong>Vue3 | Node.js | Canvas</div>
            <div>
              <strong>项目简介：</strong>
              一个实时查看珠海公交的web端app，相比珠海公交官方的小程序添加了路线规划和公交车到站提醒订阅功能
            </div>
          </div>
          <div style={{pageBreakAfter:'always'}}></div>
          <div className={styles['content-head']}>
            <div>共享弹幕</div>
            <div>移动端APP</div>
          </div>
          <div>
            <div><strong>技术栈：</strong>Android | Flutter | Node.js | WebSocket</div>
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
          <div className={styles['content-head']}>
            <div>贪吃蛇</div>
            <div>Web端游戏</div>
          </div>
          <div>
            <div><strong>技术栈：</strong>Cocos Creator | JavaScript</div>
            <div>
              <strong>项目简介：</strong>基于Cocos游戏引擎开发的贪吃蛇小游戏，相比传统的贪吃蛇加入了关卡设计和道具设计
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          专业<br />技能
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
          自我<br />评价
        </div>
        <div className={styles.content} style={{ border: 'none' }}>
          <ul>
            <li>热爱编程，善于利用编程解决生活中遇到的问题，能主动学习并不断更新自身技能</li>
            <li>熟悉常见的数据结构和算法，可从零独立开发应用，包括前端页面编写、数据库设计、服务器接口编写及最终部署上线</li>
            <li>良好的产品审美，能独立、按时按量完成工作任务，并协助他人工作，勇于沟通</li>
            <li>具有一定的英语和源码阅读能力，能熟练使用Google、StackOverflow、GitHub等平台解决工作中遇到的问题</li>
          </ul>
        </div>
      </div>
      <div className={styles.qrCode}>
        <div className={styles['qrCode-box']}>
          <Image loading={'eager'} width={128} height={128}
                 src='https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/qrCode.png' />
          <div>线上简历</div>
          <div style={{fontSize:12}}>blog.septem1997.cn/about</div>
        </div>
      </div>
    </div>
  </div>
}

export default ResumePaper

<template>
  <div class="container">
    <div class="page">
      <div class="pageHeader">
        <div class="avatar">
          <div class="avatar-overlay">
            <div class="skill-icons">
              <div class="skill-icon-box" style="align-self: flex-end">
                <div><strong>React</strong></div>
                <img src="../assets/img/react.svg">
              </div>
              <div class="skill-icon-box" style="padding-top: 12px">
                <div><strong>Vue</strong></div>
                <img src="https://cn.vuejs.org/images/logo.svg">
              </div>
              <div class="skill-icon-box" style="align-self: flex-end">
                <div><strong>Flutter</strong></div>
                <img src="../assets/img/flutter.svg">
              </div>
            </div>
            <div class="avatar-img-box">
              <img src="../assets/img/head.jpg">
            </div>
          </div>
        </div>
        <div class="personInfo">
          <div class="name">
            陈校培
          </div>
          <div class="offer">
            意向岗位：WEB前端工程师 | 薪资：13-15K | 随时到岗
          </div>
          <div class="info">
            {{ personInfo.age }}岁 |
            {{ personInfo.email }} |
            {{ personInfo.phone }} |
            {{ personInfo.workYear }}年工作经验<br>
            github：{{ personInfo.github }}
          </div>
        </div>
      </div>
      <div v-if="true" class="section">
        <div class="title">
          教育<br>背景
        </div>
        <div class="content">
          <div class="content-head">
            <div>2020.09~2022.06</div>
            <div>吉林大学珠海学院(全日制在籍)</div>
            <div>软件工程 | 本科</div>
          </div>
          <div class="content-head" style="margin-top: 12px">
            <div>2015.09~2018.06</div>
            <div>广东科学技术职业学院</div>
            <div>软件技术 | 专科</div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="title">
          工作<br>经历
        </div>
        <div class="content">
          <div class="content-head">
            <div>2019.03~2020.03</div>
            <div>珠海新海通电子商务有限公司</div>
            <div>web前端工程师</div>
          </div>
          <div>
            <strong>岗位职责：</strong>担任前端主力开发，负责公司前端商城等项目的技术选型，框架搭建和业务开发
            <div><strong>主要工作：</strong></div>
            <ul>
              <li>基于react搭配echarts图表插件开发了公司经营数据可视化看板，响应式布局设计，完美适配高分屏</li>
              <li>基于electron重构pc端客服聊天系统，优化接口调用，提高程序响应时间</li>
              <li>基于Vue和Ant Design UI搭建了前后端分离的商品后台管理系统，复用代码，统一封装API请求接口</li>
            </ul>
          </div>

          <div class="content-head">
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
          <div class="content-head">
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
      <div class="section">
        <div class="title">
          个人<br>作品
        </div>
        <div class="content">
          <div class="content-head">
            <div>共享弹幕</div>
            <div>移动端APP</div>
          </div>
          <div>
            <div><strong>技术栈：</strong>Android | Flutter | Node.js | Mysql | WebSocket</div>
            <div>
              <strong>项目简介：</strong>一个全局弹幕聊天工具，适用于和小伙伴一起看电影看直播或者玩游戏等场景，在这种场景下你想和小伙伴分享或者吐槽时可直接发送弹幕消息，解决了各大直播和视频平台的弹幕功能无法创建房间的痛点（文末附二维码，Android手机扫码可体验）
            </div>
          </div>
          <div class="content-head">
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
      <div class="section">
        <div class="title">
          专业<br>技能
        </div>
        <div class="content">
          <ul>
            <li>编程语言：HTML5，CSS3，JavaScript，TypeScript，Java，Dart</li>
            <li>前端框架：Vue，React，Electron，jQuery，Flutter，小程序</li>
            <li>后端框架：Node.js，SpringBoot</li>
            <li>其他：Git，PS，WebStorm，MySql，WebSocket，Linux，Sass</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <div class="title">
          自我<br>评价
        </div>
        <div class="content" style="border: none">
          <ul>
            <li>热爱编程，善于利用编程解决生活中遇到的问题，能主动学习并不断更新自身技能</li>
            <li>熟悉常见的数据结构和算法，可从零独立开发应用，包括前端页面编写、数据库设计、服务器接口编写及最终部署上线</li>
            <li>良好的产品审美，能独立、按时按量完成工作中的任务，并协助他人工作，勇于沟通</li>
            <li>具有一定的英语和源码阅读能力，能熟练使用Google、StackOverflow、GitHub等平台解决工作中遇到的问题</li>
          </ul>
        </div>
      </div>
      <div class="qrCode">
        <div class="qrCode-box">
          <img src="../assets/img/qrCode.png">
          <div>线上简历</div>
        </div>
        <div class="qrCode-box">
          <img src="https://www.pgyer.com/app/qrcode/yvV2">
          <div>共享弹幕</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  layout: 'blank',
  data () {
    return {
      personInfo: {
        age: 24,
        workYear: 4,
        phone: '16675644396',
        email: '750627595@qq.com',
        github: 'github.com/septem1997'
      }
    }
  },
  head () {
    return {
      title: '陈校培个人简历'
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  width: 100%
  background-image: url("https://septem1997-blog.oss-cn-beijing.aliyuncs.com/bg.jpg")
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center center
  background-size: cover
.qrCode
  margin-top: 48px
  display: flex
  padding: 1.5cm
  flex-direction: row-reverse
  .qrCode-box
    margin-left: 64px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 128px
    img
      width: 100%
      height: auto

.content-head:not(:first-child)
  margin-top: 24px
.section
  padding: 0 1.5cm
  display: flex
  margin-bottom: 12px
  align-items: start
  .title
    margin-right: 24px
    border: 2px solid #6686ae
    border-radius: 4px
    padding: 12px 24px
    font-size: 18px
    font-weight: bold
    color: #2378e6
  .content
    flex: 1
    border-bottom: 1px solid #eeebee
    padding-bottom: 12px
    .content-head
      padding-bottom: 6px
      display: flex
      align-items: center
      justify-content: space-between
      font-weight: bold
.page
  background: white

.pageHeader
  display: flex
  height: 5cm
  background: rgb(244,245,252)
  padding: 0 1.5cm
  flex-wrap: wrap
  margin-bottom: 2cm
  .avatar
    width: 4cm
    position: relative
    .avatar-overlay
      width: 100%
      height: 6.2cm
      position: absolute
      border-bottom-left-radius: 2cm
      border-bottom-right-radius: 2cm
      left: 0
      top: 0
      background: rgb(29,122,239)
      display: flex
      flex-direction: column
      align-items: center
      justify-content: stretch
      .skill-icons
        flex: 1
        display: flex
        align-items: center
        justify-content: center
        .skill-icon-box
          color: white
          width: 42px
          text-align: center
        img
          width: 20px
          height: 20px
      .avatar-img-box
        margin: 0.2cm
        border-radius: 50%
        width: 3.6cm
        height: 3.6cm
        background: #428eda
        border: 0.1cm solid white
        overflow: hidden
        display: flex
        align-items: center
        justify-content: center
        img
          width: 110%
          height: auto
          padding-top: 12px
  .personInfo
    display: flex
    justify-content: center
    padding: 18px
    flex-direction: column
    flex: 4
    .name
      font-size: 32px
      margin-bottom: 6px
    .offer
      padding: 12px 0
      width: 100%
      font-size: 16px
      border-bottom-color: grey
      border-bottom-width: 1px
      border-bottom-style: dashed
    .info
      font-size: 15px
      margin-top: 12px
@media only screen and (max-width: 768px)
  .page
    width: 100%
  .pageHeader
    height: auto
  .avatar
    height: 6cm
  .section
    flex-direction: column
    align-items: center
  .content-head
    flex-direction: column
  .title
    margin-bottom: 12px

@media screen and (min-width: 769px)
  .page
    width: 21cm
    //height: 297mm
    margin: 64px auto
    box-shadow: 0 13px 8px 0 rgba(0, 0, 0, .14), 0 8px 15px 7px rgba(0, 0, 0, .2), 0 6px 6px 0 rgba(0, 0, 0, .12)
    overflow: hidden
</style>

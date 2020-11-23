<template>
  <div class="container">
    <div class="left">
      <div class="avatar">
        <img src="../assets/img/head.jpg">
      </div>
      <div class="personInfo">
        <div v-for="(item,index) in personalInfo" :key="index" class="row">
          <font-awesome-icon :icon="item.icon"/>
          &nbsp;{{ item.val }}
        </div>
      </div>
      <h3 style="margin-left: 10px;color: white;margin-top: 20px">
        <font-awesome-icon icon="book"/>
        &nbsp;技能关键词
      </h3>
      <div class="skillKeyWord">
        <div v-for="(item,index) in skills" :key="index" class="word">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="right">
      <div class="name">
        陈校培
      </div>
      <div class="title">
        <font-awesome-icon icon="glasses"/>&nbsp;个人优势
      </div>
      <div>
        热爱学习和探索各类计算机技术，熟悉常见的数据结构和算法，可从零独立开发应用，包括前端页面编写、数据库设计、服务器接口编写及最终部署上线
      </div>
      <div class="title">
        <font-awesome-icon icon="flask"/>&nbsp;个人作品
      </div>
      <div class="projectName">
        巴士到哪了
      </div>
      <div>微信小程序，基于wepy开发的公交出行助手，整合了路径规划和公交车实时信息功能（因珠海公交接口废弃，现已下架，源码可见GitHub）</div>
      <div class="projectName">
        每日一文UWP
      </div>
      <div>一款win10端文章阅读类应用，每天更新推送一篇优质文章，目前已在win10应用商店上架，搜索名字即可体验</div>
      <div class="title">
        <font-awesome-icon icon="briefcase"/>&nbsp;工作经历
      </div>
      <div class="projectName">
        珠海新海通电子商务有限公司
      </div>
      <div class="workTitle">
        <div><strong>公司业务： </strong>建筑机械设备租赁及销售</div>
        <div class="workTime">
          2019-03~2020-03
        </div>
      </div>
      <div class="workContent">
        <strong>岗位职责： </strong>担任前端主程，负责公司前端项目的技术选型，框架搭建和业务开发
      </div>
      <div class="workContent">
        <strong>重点工作： </strong>
        1.基于react搭配echarts图表插件开发了展示公司经营数据的数据看板，响应式布局设计，完美适配高分屏<br>
        2.基于electron重构pc端客服聊天系统，优化接口调用，提高程序响应时间。<br>
        3.重构商城，实现了前后端分离的同时又采用node.js实现了后端渲染，保证了seo。
      </div>
      <div class="projectName">
        珠海金刚科技有限公司
      </div>
      <div class="workTitle">
        <div><strong>公司业务： </strong>赌场账房系统</div>
        <div class="workTime">
          2018-07~2019-02
        </div>
      </div>
      <div class="workContent">
        <strong>岗位职责： </strong>担任公司前端主程并负责部分后端业务
      </div>
      <div class="workContent">
        <strong>重点工作： </strong>1. 以非侵入式方式重写ajax请求，添加了拦截器，复用重复代码，提高接口调用开发效率。
        <br>2. 完善单据打印功能，利用Promise特性解决了打印顺序不同步的问题，封装打印公共方法，降低了同类需求开发成本。
        <br>3. 改进前端框架，独立编写了国际化多语言模块，使得公司产品可面向海外用户。
        <br>4. 改进数据报表导出功能，利用webSocket技术分离了数据报表导出等耗时操作。
      </div>

      <div class="projectName">
        小笋科技(深圳)有限公司
      </div>
      <div class="workTitle">
        <div><strong>公司业务： </strong>共享单车，商家运营推广</div>
        <div class="workTime">
          2017-07~2018-06
        </div>
      </div>
      <div class="workContent">
        <strong>岗位职责： </strong>全栈开发，主要涉及后台管理系统及微信公众号。
      </div>
      <div class="workContent">
        <strong>重点工作： </strong>1. 为产品开发了即时聊天系统(web端和小程序端)，仿微信界面，可发送图片、语音和位置，具有聊天记录本地缓存和线上同步等功能。
        <br>2. 利用反射和注解实现了前端html代码自动生成，减少此类重复繁琐的开发工作，让团队更专注于其他特殊需求。
        <br>3. 基于POI和JAVA反射技术实现了excel表格导出自动化工具，市场部人员无需了解sql知识即可根据自己需求导出表格数据，极大减少繁杂多样的sql查询需求工作。
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
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue',
        'Nuxt',
        'React',
        'Node.js',
        'Electron',
        'jQuery',
        'Webpack',
        'Stylus',
        'PWA',
        '微信公众号',
        '小程序',
        'Java',
        'Spring',
        'MySql',
        'C#',
        'UWP',
        'Git',
        'PhotoShop'
      ],
      personalInfo: [
        {
          val: '23岁',
          icon: 'calendar-alt'
        }, {
          val: '3年工作经验',
          icon: 'briefcase'
        }, {
          val: '16675644396',
          icon: 'phone'
        }, {
          val: '750627595@qq.com',
          icon: 'envelope'
        }, {
          val: 'github.com/septem1997',
          icon: 'code'
        }
      ]
    }
  },
  head () {
    return {
      title: '陈校培个人简历'
    }
  }
}
</script>

<style lang="stylus" scoped>
svg{
  width 0
}
@media only screen and (max-width: 768px)
  .container
    flex-direction column
    width 100%

  .right
    width 100%

  .left
    width 100%

  .notPrint
    display none

@media screen and (min-width: 769px)
  .container
    flex-direction row
    width: 21cm
    height: 297mm
    margin: 10px auto
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)
    overflow: hidden
    border-radius: 4px

  .left
    height 100%
    width 240px
    padding 6px
    box-sizing border-box
.workTitle
  display flex
  justify-content space-between

.workContent
  margin-top 5px
  font-size 14px

.name
  font-size 26px
  margin-top 15px

.projectName
  font-size 18px
  font-weight bold
  margin 8px 0

.right
  flex: 1
  padding: 0 20px
  box-sizing border-box
  padding-bottom 5px
  display flex
  flex-direction column
  align-items stretch

.title
  color: #29B6F6
  font-size: 20px
  border-bottom: #29B6F6 1px solid
  margin-top 16px
  margin-bottom 5px

.skillKeyWord
  display: flex
  flex-wrap: wrap
  justify-content: space-evenly
  padding 5px 0

.word
  margin: 4px
  padding: 4px 6px
  border-radius: 16px
  border: white 1px solid
  font-size: 16px

.container
  display: flex

.left
  background-color: #29B6F6
  display: flex
  flex-direction: column
  color: white

.avatar
  margin: 40px auto
  width: 120px
  height: 160px
  overflow hidden
  border: 1px solid whitesmoke
  background-color: white

  img
    width 100%

.personInfo
  margin-left: 22px
  font-size: 15px

.personInfo
  .row
    margin-top: 10px

    svg
      width 20px
      text-align center

</style>

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

.page
  background: white

.pageHeader
  display: flex
  height: 5cm
  background: rgb(244,245,252)
  padding: 0 1cm
  flex-wrap: wrap
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

@media screen and (min-width: 769px)
  .page
    width: 21cm
    height: 297mm
    margin: 64px auto
    box-shadow: 0 13px 8px 0 rgba(0, 0, 0, .14), 0 8px 15px 7px rgba(0, 0, 0, .2), 0 6px 6px 0 rgba(0, 0, 0, .12)
    overflow: hidden
</style>

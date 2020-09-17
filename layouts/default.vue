<template>
  <div>
    <div class="header">
      <div class="title">
        {{ blogInfo.title }}
      </div>
      <div class="links">
        <nuxt-link to="/">
          <div class="link">
            首页
          </div>
        </nuxt-link>
        <nuxt-link to="/menu">
          <div class="link">
            目录
          </div>
        </nuxt-link>
        <nuxt-link to="/messages">
          <div class="link">
            留言板
          </div>
        </nuxt-link>
        <nuxt-link to="/about">
          <div class="link">
            关于我
          </div>
        </nuxt-link>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogInfo: {
        title: '壶中界'
      },
      scrollDirection: null,
      scrollY: false
    }
  },
  watch: {
    scrollDirection (val) {
      console.log(val)
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      // todo 新增延时锁，避免时时刻刻触发
      this.scroll()
    })
  },
  methods: {
    scroll () {
      if (!this.scrollY) { // 目前滚动了多少距离给定一个初始值
        this.scrollY = window.pageYOffset
      }
      // 通过上次滚动的距离和当前滚动的距离作差，判定滚动方向
      const diffY = this.scrollY - window.pageYOffset
      if (diffY < 0) {
        this.scrollDirection = 'down'
      } else if (diffY > 0) {
        this.scrollDirection = 'up'
      }
      // 将这次滚动的距离记录下来，以便下次使用
      this.scrollY = window.pageYOffset
    }
  }

}
</script>

<style lang="sass">
html
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

.header
  position: relative
  background: #24292e
  color: white
  height: 48px
  display: flex
  align-items: center
  .title
    color: white
    font-size: 18px
    margin-left: 8px
  .links
    position: absolute
    right: 0
    font-size: 14px
    top: 0
    height: 100%
    display: flex
    align-items: center
    .link
      color: white
      margin-right: 32px

</style>

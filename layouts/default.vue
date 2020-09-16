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
      }
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
    display: flex
    align-items: center
    .link
      color: white
      margin-right: 16px

</style>

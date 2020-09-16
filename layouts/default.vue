<template>
  <div>
    <div class="header">
      <div class="title">
        {{ blogInfo.title }}
      </div>
      <ul class="links">
        <li>首页</li>
        <li>目录</li>
        <li>留言板</li>
        <li>关于我</li>
      </ul>
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
  background: #212121
  color: white
  .title
    color: white
    font-size: 18px
  .links
    position: absolute
    right: 0
    font-size: 14px
    top: 0
</style>

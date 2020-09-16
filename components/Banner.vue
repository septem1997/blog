<template>
  <div class="banner">
    {{ slogan }}
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      slogan: '这是个标语'
    }
  }
}
</script>

<style scoped lang="sass">
.banner
  background: #24292e
  height: 320px
  display: flex
  color: white
  font-size: 32px
  align-items: center
  justify-content: center
</style>

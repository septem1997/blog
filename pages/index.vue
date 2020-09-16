<template>
  <div>
    <banner />
    <div class="container">
      <div class="articleList">
        <div v-for="(item,index) in lastArticles" :key="index">
          <div>{{ item.title }}</div>
          <div>{{ item.summary }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  components: { Banner },
  data () {
    return {
      lastArticles: [

      ]
    }
  },
  mounted () {
    for (let i = 0; i < 20; i++) {
      this.lastArticles.push({
        title: '12312312',
        summary: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
        createTime: '2020-10-10 10:10:12'
      })
    }
  }
}
</script>

<style lang="sass" scoped>

.links
  padding-top: 15px
</style>

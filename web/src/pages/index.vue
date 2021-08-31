<template>
  <div class="home">
    <div class="blog-title">Blog.Septem1997</div>
  </div>
  <weather-widget class="absolute right-0 top-0" />
</template>

<script>
import WeatherWidget from "../components/WeatherDateWidget.vue";
export default {
  name: "test",
  components: {WeatherWidget}
}
</script>

<style scoped>
.blog-title{
  position: fixed;
  left: 48px;
  top: 48px;
  font-size: 32px;
}
.home{
  height: 100vh;
  width: 100vw;
  background: url("https://macjpeg.macsc.com/macdown/pic/202009/02173132_6644a59c5a.jpeg") no-repeat;
  background-size: 100% 100%;
}
</style>

<template>
<div class="wrapper">
  <div  class="rainbow-circle">
    <div class="c1"></div>
    <div class="c2"></div>
    <div class="c3"></div>
    <div class="c4"></div>
    <div class="c5"></div>
  </div>
  <div class="weather-box">
    <img src="../assets/img/sun.png">
  </div>
  <div class="date">
    08/31 二
  </div>
  <div class="hour">下午</div>
</div>
</template>

<script>
export default {
  name: "WeatherWidget"
}
</script>

<style scoped>
.wrapper{
  width: 460px;
  height: 240px;
  overflow: hidden;
}
.c1{
  border-width: 54px;
  border-color: #f3ff1f;
}
.c2{
  border-width: 38px;
  border-color: #f5ab2b;
}
.c3{
  border-width: 28px;
  border-color: #fdf7e3;
}
.c4{
  border-width: 20px;
  border-color: #cd570d;
}
.c5{
  border-width: 12px;
  border-color: #fdf58b;
}
.date{
  background: #29272c;
  padding: 0 64px;
  line-height: 32px;
  height: 28px;
  font-size: 28px;
  color: white;
  right: 120px;
  top: 24px;
  border-radius: 36px;
  position: absolute;
  font-weight: bold;
  letter-spacing: 8px;
  transform: scale(1,0.8);
}
.hour{
  right: 200px;
  top: 48px;
  position: absolute;
  color: white;
  font-size: 42px;
  font-weight: bold;
  -webkit-text-stroke: 2px #29272c;
}
.weather-box{
  border-radius: 50%;
  width: 82px;
  height: 82px;
  background: #f7f820;
  position: absolute;
  right: 52px;
  top: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.weather-box img{
  width: 80%;
  height: 80%;
}
.rainbow-circle{
  position: absolute;
  right: -28px;
  top: -28px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rainbow-circle div{
  position: absolute;
  border-radius: 50%;
  width: 260px;
  height: 260px;
  border-style: solid;
  box-sizing: content-box;
}
</style>

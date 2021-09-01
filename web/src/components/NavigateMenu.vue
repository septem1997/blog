<template>
<div class="menu"  @click="$emit('update:visible',false)">
</div>
</template>

<script>
import GradientBG from "./GradientBG.vue";
export default {
  name: "NavigateMenu",
  components: {GradientBG},
  props:{
    visible:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.menu{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: height 200ms;
}
.gradient{
  width: 100%;
  height: 150%;
  transform: skewY(-25deg) translateY(-80vh);
  position: absolute;
  top: 0;
}
.cube-bg{
  background-image: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1));
  width: 100vh;
  height: 100vh;
  position: absolute;
  left: -40%;
  top: 0;
  transform: rotate(-45deg);
}

</style>

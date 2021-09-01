<template>
<div class="wrap">
  <div class="yellowStripe">
  </div>
  <div class="blackStripe">
    <slot/>
  </div>
</div>
</template>

<script>
export default {
  name: "BigTitle"
}
</script>

<style scoped>
.wrap{
  min-width: 280px;
  text-align: center;
  padding: 12px 0;
  letter-spacing: 4px;
}
.wrap >div{
  border-radius: 4px;
}
.yellowStripe{
  background: #f7f820;
  transform: rotate(5deg);
  position: absolute;
  width: 100%;
  height: calc(100% - 24px);
  z-index: -1;
}
.blackStripe{
  z-index: 2;
  color: white;
  background: black;
  padding: 2px 0;
  font-size: 24px;
}

</style>

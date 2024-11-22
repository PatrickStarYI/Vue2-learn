<template>
  <div class="app">
    <div class="base-chart-box">
      这是一个捣乱的盒子
    </div>
   <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components:{
    HelloWorld
  }
}
</script>

<style>
.base-chart-box {
  width: 300px;
  height: 200px;
}
</style>
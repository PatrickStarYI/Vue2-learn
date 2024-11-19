<template>
  <div class="app" style="border: 3px solid red; margin: 10px">
    我是父组件
    <HelloWorld :title="myTitle" :name="name" @change="myTitle=$event" />

  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name:'App',
  data(){
    return{
      myTitle:'help it hm',
      name:'不知天高地厚'
    }
  },
  components:{
    HelloWorld,
  }
}

</script>

<style>

</style>
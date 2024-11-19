<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      username: '张三',
      age: 18,
      isSingle: true,
      car: {
        brand: 's680',
      },
      hobby: ['足球', '篮球', '排球'],
    };
  },
  components: {
  HelloWorld,
  },
};
</script>

<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是父组件
    <HelloWorld
      :username="username"
      :age="age"
      :isSingle="isSingle"
      :car="car"
      :hobby="hobby"
    ></HelloWorld>
  </div>
</template>

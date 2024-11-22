<template>
   <div class="app">
    <input v-focus type="text">

    <span v-color="color1">你好</span>
    <span v-color="color2">你好111</span>
    <button @click="color1 = 'blue'">改变颜色</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'green'
    }
  },
  components:{

  },
  // 自定义指令
  directives:{
    //自动聚焦
    focus:{
      inserted(el,binding){
        console.log(el,binding)
        el.focus()
      }
    },
    //改变文字颜色
    color:{
      inserted(el,binding){
        el.style.color = binding.value
      },
      update(el,binding){
        el.style.color = binding.value
      }
    }
  }
}

</script>

<style>

</style>
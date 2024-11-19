<template>
<div style="border: 3px solid pink ; width: 300px ; height: 300px; margin: 10px">
  子组件
  <div>{{title}}</div>
  <div>{{name}}</div>
  <button @click="changeTitle">修改标题</button>
</div>

</template>

<script>
export default {
  name:'SonComp',
   props: ['title', 'name'],
  methods:{
    changeTitle(){
      this.$emit('changeMyTitle', '传智教育')
    }
  }
}

</script>

<style scoped>

</style>

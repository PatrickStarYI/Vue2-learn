<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <div>
      <button @click="count--">-</button>
      <span>{{ count }}</span>
      <button @click="count++">+</button>
    </div>
  </div>
</template>

<script>
export default {
  // 因为定义在data选项中的属性是响应式的
  data() {
    return {
      title: '计数器案例',
      count: 0
    }
  },
  // 1. 创建阶段（准备数据）
  /*
    setup函数
  */
  beforeCreate () {
    console.log('beforeCreate--', this.title)
  },

  created(){
    // data选项已经有了
    // 发网络请求拿到的数据就可以往data选项中的属性里面存储
    console.log('created--', this.title)
  },


  // 2. 挂载阶段（渲染模板）
  /*
    onBeforeMount(()=>{})
    onMounted(()=>{})
  */
  beforeMount(){
    console.log('beforeMount--', document.querySelector('h3'))
  },

  mounted(){
    // DOM才渲染完毕, 才可以操作DOM
    console.log('mounted--', document.querySelector('h3'))
  },

  // 3. 更新阶段(修改数据 → 更新视图)
  // 数据已经变化, 但是视图未更新
  /*
    onBeforeUpdate(()=>{})
    onUpdated(()=>{})
  */
  beforeUpdate(){
    console.log('beforeUpdate--')
  },

  // 数据已经变化, 视图也更新了
  updated(){
    console.log('updated--')
  },

  // 4. 卸载阶段
  /*
    onBeforeUnmount(()=>{})
    onUnmounted(()=>{})
  */
  beforeDestroy(){
    // 释放vue相关的资源
    // 比如: 定时器, 延时器
    console.log('beforeDestroy--')
  },

  destroyed(){
    console.log('destroyed--')
  }
}
</script>

<style scoped></style>
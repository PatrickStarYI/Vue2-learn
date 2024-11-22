<template>
  <div id="app">
    app
    <div>user模块---{{userInfo}}</div>
    <div>setting模块---{{ theme}}</div>
    <button @click="clickFn1">修改用户</button>
    <button @click="clickFn2">修改主题</button>
    <button @click="clickFn3">1s后修改用户信息</button>

  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default{
  name:'App',
  computed:{
   ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
     ...mapGetters('setting', ['uppcaseTheme']),
  },
  created() {
  },
  methods:{
    ...mapMutations('user',['changeUserInfo']),
    ...mapMutations('setting',['changeTheme']),
     ...mapActions('user', ['asyncChangeUserInfo']),
    clickFn1(){
      this.changeUserInfo({name:'张三',age:18})
    },
    clickFn2(){
      this.changeTheme('深空灰')
    },
    clickFn3(){
      this.asyncChangeUserInfo({name:'李四',age:19})
    }
  }
}



</script>

<style>

</style>
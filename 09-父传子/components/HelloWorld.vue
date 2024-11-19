<template>

 <div id="app">
    <ul>
      <li class="news" v-for="news in newList" :key="news.id">
        <div class="left">
          <div class="title">{{ news.title }}</div>
          <div class="info">
            <span>{{ news.source }}</span>
            <span>{{ news.time }}</span>
          </div>
        </div>
        <div class="right">
          <img :src="news.img" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      newList: []
    }
  },
  created(){
    this.getNewList()
  },
  methods: {
    async getNewList(){
     const res = await  axios.get('http://hmajax.itheima.net/api/news')
     console.log(res.data.data)
     this.newList = res.data.data
    }
  }
}
</script>

<style scoped>
 * {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .news {
      display: flex;
      height: 120px;
      width: 600px;
      margin: 0 auto;
      padding: 20px 0;
      cursor: pointer;
    }
    .news .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 10px;
    }
    .news .left .title {
      font-size: 20px;
    }
    .news .left .info {
      color: #999999;
    }
    .news .left .info span {
      margin-right: 20px;
    }
    .news .right {
      width: 160px;
      height: 120px;
    }
    .news .right img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>

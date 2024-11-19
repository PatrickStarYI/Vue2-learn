<template>
  <div class="base-count">
    <button @click="sub(1)">-</button>
    <span>{{ count }}</span>
    <button @click="add(1)">+</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 100,
    }
  },
  methods: {
    sub(num){
      this.count -= num
    },
    add(num){
      this.count += num
    }
  }
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>
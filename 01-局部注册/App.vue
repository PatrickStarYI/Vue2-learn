<template>
 <div>
   <hm-header></hm-header>
   <hm-main></hm-main>
   <hm-footer></hm-footer>
 </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HmFooter from './components/HmFooter.vue'
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
export default {
  name: 'App',
  components: {
    HmFooter,
    HmHeader,
    HmMain
  }
}
</script>

<style>

</style>

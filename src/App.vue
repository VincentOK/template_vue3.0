<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sss{
  width: 375px;
  height: 100px;
  /*border: 1px solid red;*/
}
</style>

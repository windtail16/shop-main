<template>
  <div id="app">
    <router-view class="top" name="top"></router-view>
    <router-view class="mid" name="Content"></router-view>
    <router-view class="bottom" name="bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  */
}
</style>

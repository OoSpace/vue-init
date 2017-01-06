<template>
  <div id="app">
    <Head></Head>
    <Menu></Menu>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/head'
import Menu from './components/menu'
import Foot from './components/foot'

export default {
  name: 'app',
  components: {
    Head,
    Menu,
    Foot
  }
}
</script>

<style scoped>
  @import "assets/css/common.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

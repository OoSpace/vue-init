<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <h2>2^10</h2>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
        msg: 'Menu bar'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

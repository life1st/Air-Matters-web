<template>
  <div id="app">
    <navigator />
    <router-view />
  </div>
</template>
<script>
  import navigator from './components/navigator'

  export default {
    components: {
      navigator
    }
  }
</script>
<style lang="less">
  @import "~normalize.css";
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*font-family: 'STXihei';*/
  font-family: 'Microsoft YaHei UI';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

  /* animation */
  .slide-left {

  }
  .slide-left-enter,
  .slide-left-leave-to {
    transform: translateX(-100%);
  }
  .slide-left-enter-to,
  .slide-lifet-leave {
    transform: translateX(0);
  }
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .3s;
  }

  /* global setting */
  .icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>

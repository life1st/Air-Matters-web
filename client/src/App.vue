<template>
  <div id="app">
    <navigator />
    <router-view />
  </div>
</template>
<script>
  import navigator from './components/navigator'
  import store from 'store'
  import { getLocation } from "./api";

  export default {
    components: {
      navigator
    },
    created() {
      getLocation().then(res => {
        console.log(res, 'get location.')
      }).catch(err => {
        console.log(err, 'get err.')
      })
    }
  }
</script>
<style lang="less">
  @import (less) "~normalize.css";
  @import "assets/css/animation.less";
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

  /* global setting */
  .icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
  }
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>

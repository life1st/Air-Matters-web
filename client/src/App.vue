<template>
  <div id="app">
    <navigator
      :show-back="showBack"
      :show-add="showAdd"
      :title="title" />
    <router-view />
  </div>
</template>
<script>
  import navigator from './components/navigator'
  import { getLocation, getRanking } from "./api";

  export default {
    components: {
      navigator
    },
    data() {
      return {
        showBack: false,
        showAdd: false,
        title: 'Air Matters'
      }
    },
    watch: {
      '$route.path'(path) {
        this.handleRouteChange(path)
      }
    },
    methods: {
      handleRouteChange(path) {
        switch (path) {
          case '/collection':
            this.title = '收藏的地点'
            this.showBack = true
            this.showAdd = true
            break
          default:
            this.title = 'Air Matters'
            this.showBack = false
        }
      }
    },
    created() {
      // getLocation().then(res => {
      //   console.log(res, 'get location.')
      // }).catch(err => {
      //   console.log(err, 'get err.')
      // })

      // getRanking().then(res => {
      //   console.log(res, 'get ranking.')
      // })
      this.handleRouteChange(this.$route.path)
    }
  }
</script>
<style lang="less">
  @import (less) "~normalize.css";
  @import "assets/css/animation.less";
  @import "assets/icon-font/index.less";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /*font-family: 'STXihei';*/
    /*font-family: 'Microsoft YaHei UI';*/
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

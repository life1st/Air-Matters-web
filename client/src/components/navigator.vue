<template>
  <div class="navigator">
    <div class="header">
      <i class="icon"
         @click="openMenu"></i>
      <p class="title">{{title}}</p>
    </div>
    <hamburger v-show="isOpenMenu"
          @cancelSelect="hideMenu"/>
  </div>
</template>

<script>
  import hamburger from './hamburger'
  export default {
    name: "navigator",
    data() {
      return {
        title: '在意空气',
        isOpenMenu: false
      }
    },
    components: {
      hamburger
    },
    methods: {
      openMenu() {
        this.isOpenMenu = true
      },
      hideMenu() {
        this.isOpenMenu = false
      }
    }
  }
</script>
<style scoped lang="less">
  .navigator {
    .header {
      position: relative;
      .icon {
        @w: 24px;
        @h: 24px;
        width: @w;
        height: @h;
        background-image: url("../assets/icon/icon-menu.png");
        background-size: @w @h;
        position: absolute;
        left: 0;
        top: 0;
      }
      .title {
        margin: 0 auto;
      }
    }
  }
</style>
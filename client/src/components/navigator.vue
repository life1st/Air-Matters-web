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
      @h: 168px / 3;
      position: relative;
      height: @h;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      .icon {
        @w: 60px / 3;
        @h: 48px / 3;
        width: @w;
        height: @h;
        background-image: url("../assets/icon/icon-menu.png");
        background-size: @w @h;
        position: absolute;
        left: 54px / 3;
        top: 50%;
        transform: translateY(-50%);
      }
      .title {
        margin: 0 auto;
        padding-left: 220px / 3;
        font-size: 54px / 3;
        text-align: left;
        line-height: @h;
      }
    }
  }
</style>
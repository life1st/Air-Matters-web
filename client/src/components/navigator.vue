<template>
  <div class="navigator">
    <div class="header">
      <i class="icon"
         @click="openMenu"></i>
      <p class="title">{{title}}</p>
    </div>
    <hamburger v-show="isOpenMenu"
               :isMenuShow="isOpenMenu"
               @changeRouter="hideMenu"
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
        isOpenMenu: false,
        touch: {
          start: [0, 0],
          end: [0, 0]
        }
      }
    },
    components: {
      hamburger
    },
    created() {
      this.initTouchEvent()
    },
    methods: {
      openMenu() {
        this.isOpenMenu = true
      },
      hideMenu() {
        this.isOpenMenu = false
      },
      initTouchEvent() {
        window.addEventListener('touchstart', e => {
          this.touch.start[0] = e.changedTouches[0].clientX
          this.touch.start[1] = e.changedTouches[0].clientY
        })
        window.addEventListener('touchend', e => {
          this.touch.end[0] = e.changedTouches[0].clientX
          this.touch.end[1] = e.changedTouches[0].clientY
          this.canOpenMenu()
        })
      },
      canOpenMenu() {
        let startX = this.touch.start[0]
        let endX = this.touch.end[0]
        let startY = this.touch.start[1]
        let endY = this.touch.end[1]
        let windowX = document.body.clientWidth
        /*
        *  停止位置 X 坐标 - 起始位置 X 坐标 < 10 像素
        *  起始位置 X 坐标 < 屏幕宽度的 1/3
        *  停止位置 Y 坐标 - 起始位置 Y 坐标 < 100 像素
        *  满足全部条件 => 触发菜单打开
        * */
        if (Math.abs(endX - startX) > 10
          && startX < windowX / 3
          && Math.abs(endY - startY) < 100) {
          this.openMenu()
        }
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
      box-shadow: 1px 2px 2px #ccc;
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
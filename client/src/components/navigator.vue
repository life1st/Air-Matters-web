<template>
  <div class="navigator">
    <div class="header">
      <span class="icon right">
        <i class="iconfont search"
           v-if="showSearch"
           @click="openSearch">&#xe62e;</i>
        <i class="iconfont add"
           v-if="showAdd"
           @click="emitClick('onAddClick', $event)">&#xe6d5;</i>
        <i class="iconfont share"
           v-if="showShare"
           @click="emitClick('onShareClick', $event)">&#xe61d;</i>
      </span>
      <span class="icon left">
        <i class="menu"
           v-if="!showBack"
           @click="openMenu"></i>
        <i class="iconfont go-back"
           v-if="showBack"
           @click="goBack">&#xe604;</i>
      </span>
      <p class="title search" v-show="isOnSearch && showSearch">
        <input type="text" :value="searchValue" @keydown="emitSearch">
      </p>
      <p class="title" v-show="!isOnSearch || !showSearch">{{title}}</p>
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
    components: {
      hamburger
    },
    props: {
      showBack: {
        type: Boolean,
        default: () => false
      },
      showAdd: {
        type: Boolean,
        default: () => false
      },
      showSearch: {
        type: Boolean,
        default: () => false
      },
      showShare: {
        type: Boolean,
        default: () => false
      },
      title: {
        type: String,
        default: () => 'Air Matters'
      },
    },
    data() {
      return {
        isOpenMenu: false,
        isOnSearch: false,
        searchValue: '',
        touch: {
          start: [0, 0],
          end: [0, 0]
        }
      }
    },
    watch: {
      isOnSearch(flag) {
        if (!flag) {
          this.isOpenMenu = false
        }
      }
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
      goBack() {
        this.$router.go(-1)
      },
      openSearch() {
        this.isOnSearch = true
      },
      emitClick(type, event) {
        this.$emit(type, event)
      },
      emitSearch(e) {
        let key = e.target.key
        alert(key)
        this.$emit('onSearch')
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
          && startX < windowX / 5
          && Math.abs(endY - startY) < 100) {
          this.openMenu()
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .navigator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
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
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        &.left {
          left: 54px / 3;
        }
        &.right {
          right: 54px / 3;
        }
        .menu {
          display: block;
          width: @w;
          height: @h;
          background-image: url("../assets/icon/icon-menu.png");
          background-size: @w @h;
        }
        .go-back {
          font-size: 22px;
        }
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
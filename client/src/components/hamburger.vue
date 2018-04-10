<template>
  <transition name="blank">
    <div class="hamburger">
      <transition name="slide-left">
        <div class="content" v-show="isMenuShow">
          <div class="header" :style="setHeaderStyl">
            <div class="user-info" @click="login">
              <div class="avatar">
                <img :src="avatarSrc" alt="user avatar">
              </div>
              <p class="user-name">{{userName}}</p>
            </div>
            <div class="app-version">
              Ver {{appVersion}}
            </div>
          </div>
          <ul class="list" @click="changeRouter">
            <li v-for="(item, index) in menuList[0]"
                :key="index">
              <router-link :to="item.to"
                           active-class="active">
                <i class="icon" :style="setListIcon(item.icon)"></i>
                {{item.name}}
              </router-link>
            </li>
            <li class="line"></li>
            <li v-for="(item, index) in menuList[1]"
                :key="index">
              <router-link :to="item.to"
                           active-class="active">
                <i class="icon" :style="setListIcon(item.icon)"></i>
                {{item.name}}
              </router-link>
            </li>
            <li class="line"></li>
            <li v-for="(item, index) in menuList[2]"
                :key="index">
              <router-link :to="item.to" active-class="active">
                <i class="icon" :style="setListIcon(item.icon)"></i>
                {{item.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
      <transition name="fade">
        <div class="mask"
             v-show="isMenuShow"
             @click="cancelSelect"></div>
      </transition>
    </div>
  </transition>
</template>

<script>
  import defaultAvatar from '../assets/icon/icon-default-avatar.png'

  export default {
    name: "hamburger",
    data() {
      return {
        appVersion: '0.1.0',
        userName: '未登录',
        avatarSrc: defaultAvatar,
        menuList: [
          [
            {name: '空气质量指数', to: '/home'},
            {name: '空气质量地图', to: '/map'},
            {name: '排行榜', to: '/ranking'},
            {name: '发现', to: '/discovery'},
          ],[
            {name: '编辑收藏地点列表', to: '/collection'}
          ],[
            {name: '设置', to: '/setting'},
            {name: '关于', to: '/about'}
          ]]
      }
    },
    props: {
      isMenuShow: {
        type: Boolean,
        default: () => false
      }
    },
    computed: {
      setHeaderStyl() {
        let url = 'default'
        return `background-image: url('${url}')`
      }
    },
    methods: {
      cancelSelect() {
        this.$emit('cancelSelect')
      },
      changeRouter() {
        this.$emit('changeRouter')
      },
      isActive(item) {
        return true
      },
      setListIcon(url) {
        return `background-image: url('${url}')`
      },
      login() {
        alert('不能登陆现在。')
      }
    }
  }
</script>

<style scoped lang="less">
  .hamburger {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .content {
    width: 840px / 3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    background-color: #fff;
    .header {
      height: 480px / 3;
      color: #fff;
      background-color: #0087be;
      position: relative;
      .user-info {
        padding-top: 150px / 3;
        margin-left: 48px / 3;
        display: flex;
        align-items: center;
      }
      .avatar {
        width: 180px / 3;
        height: 180px / 3;
        margin-right: 30px / 3;
        border-radius: 50%;
        border: 2px solid #fff;
        overflow: hidden;
        background: #fff;
        img {
          width: 180px / 3;
        }
      }
      .user-name {
        font-size: 38px / 3;
      }
      .app-version {
        position: absolute;
        right: 46px / 3;
        bottom: 55px / 3;
        font-size: 30px / 3;
      }
    }
    .list {
      padding-top: 24px / 3;
      text-align: left;
      .line {
        margin: 8px 0;
        border-bottom: 1px solid #e2e2e2;
      }
      a {
        @h: 144px / 3;
        @c: #565656;
        display: block;
        padding-left: 50px / 3;
        height: @h;
        width: 100%;
        line-height: @h;
        font-size: 42px / 3;
        font-weight: 700;
        color: @c;
        text-decoration: none;
        box-sizing: border-box;
        &:visited {
          color: @c;
        }
        &.active {
          color: #0d0d0d;
          background-color: #eaeaea;
        }
      }

    }
  }
  .mask {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, .5);
  }

  /* animation */
  .slide-left-enter-active {
    transition-delay: .1s;
  }

  .fade-leave-active {
    transition-delay: 50ms;
  }

</style>
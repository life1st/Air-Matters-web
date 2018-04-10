<template>
  <transition name="fade">
    <div class="hamburger">
      <transition name="slide-left">
        <div class="content" v-show="isMenuShow">
          <div class="header" :style="setHeaderStyl">
            <div class="user-info">
              <div class="avatar">
                <img :src="avatarSrc" alt="user avatar">
              </div>
              <p class="user-name">{{userName}}</p>
            </div>
            <div class="app-version">
              ver {{appVersion}}
            </div>
          </div>
        </div>
      </transition>
      <div class="mask"
           @click="cancelSelect"></div>
    </div>
  </transition>
</template>

<script>
  import defaultAvatar from '../assets/icon/icon-default-avatar.png'

  export default {
    name: "hamburger",
    data() {
      return {
        appVersion: '0.0.1',
        userName: '未登录',
        avatarSrc: defaultAvatar,
        isMenuShow: false
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
      showMenu(flag) {
        this.isMenuShow = flag
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
      background-color: #0087be;
      .user-info {
        padding-top: 150px / 3;
        margin-left: 48px / 3;
        display: flex;
        align-items: center;
      }
      .avatar {
        width: 180px / 3;
        height: 180px / 3;
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
        color: #fff;
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

</style>
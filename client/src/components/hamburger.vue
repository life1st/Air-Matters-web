<template>
  <transition name="slide-left">
    <div class="hamburger">
      <div class="content">
        <div class="header">
          <div class="user-info">
            <div class="avatar">
              <img :src="avatarSrc" alt="user avatar">
            </div>
            <p class="user-name">{{userName}}</p>
            <div class="app-version">
              {{appVersion}}
            </div>
          </div>
        </div>
      </div>
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
        avatarSrc: defaultAvatar
      }
    },
    methods: {
      cancelSelect() {
        this.$emit('cancelSelect')
      }
    }
  }
</script>

<style scoped lang="less">
  .hamburger {
    width: 100%;
  }
  .content {
    width: 80%;
  }
  .mask {
    width: 100%;
    height: 200px;
    background-color: rgba(0, 0, 0, .5);
  }

</style>
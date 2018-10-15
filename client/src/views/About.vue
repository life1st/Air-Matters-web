<template>
  <div class="about">
    <navigator :showBack="true" title="关于"/>
    <p class="describe"><img src="../assets/icon/logo.png" alt="app-logo" class="icon"></p>
    <h1>Air-Matters</h1>
    <p>This is a personal project.</p>
    <p>It's unofficial.</p>
  </div>
</template>
<script>
  import navigator from '../components/navigator'
  export default {
    name: 'about',
    components: {
      navigator
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/verb";
  .about {
    padding-top: @navigator-h;
    .icon {
      width: 80px;
      height: 80px;
    }
  }
</style>

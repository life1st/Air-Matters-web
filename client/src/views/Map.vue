<template>
  <div class="air-map">
    <navigator :show-share="true" title="空气质量地图"/>
    <p>this is map components</p>
  </div>
</template>

<script>
  import navigator from '../components/navigator'
  export default {
    name: 'airMap',
    components: {
      navigator
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb";

  .air-map {
    padding-top: @navigator-h;
  }
</style>
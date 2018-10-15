<template>
  <div class="ranking">
    <navigator :show-share="true" title="排行榜" />
    <p>this is ranking page</p>
  </div>
</template>

<script>
  import navigator from '../components/navigator'
  export default {
    name: 'ranking',
    components: {
      navigator
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb";

  .ranking {
    padding-top: @navigator-h;
  }
</style>
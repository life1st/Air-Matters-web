<template>
  <div class="home">
    <city-card />
  </div>
</template>
<script>
  import cityCard from '../components/city/card'

  export default {
    name: "home",
    components: {
      cityCard
    }
  }
</script>
<style scoped lang="less">
  .home {

  }
</style>

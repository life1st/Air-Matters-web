<template>
  <div class="city-detail">
    <p>this is city detail page.</p>
    <div class="city">{{cityName}}</div>
  </div>
</template>

<script>
  export default {
    name: "detail",
    computed: {
      cityName() {
        let name = this.$router.params.city
        return name
      }
    }
  }
</script>

<style scoped>

</style>
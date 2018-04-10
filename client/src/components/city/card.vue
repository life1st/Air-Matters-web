<template>
  <div class="city-card">
    <div>
      <div class="text-info">
        <p class="city-name">{{cityName}}</p>
        <div class="aqi">
          <span class="title">空气质量指数</span>
          <span class="value">{{aqi}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card",
    data() {
      return {
        cityName: '北京',
        aqi: '中等'
      }
    }
  }
</script>

<style scoped>

</style>
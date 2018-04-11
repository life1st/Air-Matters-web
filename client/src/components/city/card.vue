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

<style scoped lang="less">
  .city-card {
    margin: 42px / 3 auto;
    padding: 0 18px / 3;
    width: 100%;
    max-width: 1080px / 3;
    border: 1px solid #efefef;
    border-radius: 9px / 3;
    background-color: #fff;
    box-shadow: 1px 2px 2px #c1c1c1;
  }

</style>
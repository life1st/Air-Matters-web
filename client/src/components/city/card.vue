<template>
  <div class="city-card">
    <div class="main-info">
      <div class="left">
        <p class="city-name">{{cityName}}</p>
        <div class="aqi">
          <span class="title">空气质量指数</span>
          <span class="value">{{aqi}}</span>
        </div>
      </div>
      <div class="right">
        <span class="aqi-num"></span>
        <div class="symbol" :style="`background: ${aqiColor}`"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCity } from "../../api";

  export default {
    name: "card",
    data() {
      return {
        cityName: '',
        aqi: '',
        info: {}
      }
    },
    props: {
      cityInfo: {
        type: Object,
      }
    },
    computed: {
      aqiColor() {
        let level = this.info
      }
    }
    methods: {
      setCityData() {
        let config = {
          country: this.cityInfo.url_key,
          city: this.cityInfo.name,
          id: this.cityInfo.place_id
        }
        getCity(config).then(res => {
          this.info = res
        })
      }
    },
    created() {
      this.setCityData()
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
<template>
  <div class="city-card" v-if="!!info">
    <div class="main-info">
      <div class="left">
        <p class="city-name">{{info.city}}</p>
        <div class="aqi">
          <span class="title">空气质量指数</span>
          <span class="value">{{AQIGrade(info.aqi.value)}}</span>
        </div>
      </div>
      <div class="right">
        <span class="aqi-num">{{info.aqi.value}}</span>
        <i class="symbol icon" :style="`background: ${aqiColor}`"></i>
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
        info: null
      }
    },
    props: {
      cityInfo: {
        type: Object,
      }
    },
    computed: {
      aqiColor() {
        let level = this.AQILevel(this.info.aqi.value)
        switch (level) {
          case 0:
            return '#0f0'
          case 1:
            return '#00f'
          case 2:
            return '#f00'
          case 3:
            return '#000'
        }
      }
    },
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
      },
      AQILevel(val) {
        let level = 0
        if (val < 50) {
          level = 0
        } else if (val >= 50 && val < 100) {
          level = 1
        } else if (val >= 100 && val < 150) {
          level = 2
        } else {
          level = 3
        }
        return level
      },
      AQIGrade(val) {
        let levels = ['优秀', '良好', '轻度污染', '重度污染']
        return levels[this.AQILevel(val)]
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
    text-align: left;
    .main-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .city-name {
        font-size: 48px / 3;
        font-weight: 600;
        margin-top: 48px / 3;
        margin-bottom: 38px / 3;
      }
      .aqi {
        @size: 33px / 3;
        font-size: @size;
        line-height: @size;
        .title {
          font-weight: 400;
          color: #8f9093;
          margin-right: 48px / 3;
        }
        .value {
          font-weight: 500;
          color: #030303;
        }
      }
      .right {
        display: flex;
        align-items: center;
      }
      .aqi-num {
        @size: 108px / 3;
        font-size: @size;
        line-height: @size;
        font-weight: 400;
        font-family: 'STXihei';
        margin-right: 45px / 3;
      }
      .symbol {
        width: 6px;
        height: 108px / 3;
      }
    }

  }

</style>
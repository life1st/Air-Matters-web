<template>
  <div class="city-card"
       v-if="!!info" @click="toDetail">
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
    <div class="pollutant">
      <div class="item pm2d5"
           :style="`border-bottom: 2px solid ${borderC(info.pollutant['PM10'].value)}`">
        <span class="title">PM2.5</span>
        <span class="value">{{info.pollutant['PM2.5'].value}}</span>
      </div>
      <div class="item"
           :style="`border-bottom: 2px solid ${borderC(info.pollutant['PM10'].value)}`">
        <span class="title">PM10</span>
        <span class="value">{{info.pollutant['PM10'].value}}</span>
      </div>
      <div class="item"
           :style="`border-bottom: 2px solid ${borderC(info.pollutant['PM10'].value)}`">
        <span class="title">NO2</span>
        <span class="value">{{info.pollutant['NO2'].value}}</span>
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
        return this.color(level)
      }
    },
    methods: {
      color(level) {
        switch (level) {
          case 0:
            return '#31cd31'
          case 1:
            return '#00f'
          case 2:
            return '#e02d1c'
          case 3:
            return '#000'
        }
      },
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
      },
      borderC(val) {
        let level = this.AQILevel(val)
        return this.color(level)
      },
      toDetail() {
        let cityName = this.cityInfo.name
        this.$router.push(`/detail/${cityName}`)
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
    padding: 0 18px / 3 6px;
    width: 100%;
    box-sizing: border-box;
    max-width: 1080px / 3;
    border: 1px solid #efefef;
    border-radius: 9px / 3;
    background-color: #fff;
    box-shadow: 1px 2px 2px #c1c1c1;
    text-align: left;
    /* public */
    .title {
      font-weight: 400;
      color: #8f9093;
    }
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
    .pollutant {
      display: flex;
      justify-content: space-between;
      @size: 25px / 3;
      font-size: @size;
      margin-top: 20px / 3;
      .item {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        margin: 0 30px / 3;
        padding: 0 2px 12px / 3;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

</style>
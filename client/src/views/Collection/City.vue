<template>
  <pureList class="city-list" :data="city">
    <div class="city-item" slot-scope="{data}">
      <span class="title">{{data.name}}</span>
      <span class="icon-wrap">
        <span class="aqi-box" :style="{backgroundColor: data.color}">AQI {{data.aqi}}</span>
        <i class="iconfont right next-page">&#xe655;</i>
      </span>
    </div>
  </pureList>
</template>

<script>
  import pureList from '../../components/pureList'
  import { getCityList} from "../../api/collection"

  export default {
    name: "city",
    components: {
      pureList
    },
    data() {
      return {
        city: []
      }
    },
    methods: {

    },
    created() {
      getCityList().then(({data}) => {
        console.log(data)
        if (data.ok) {
          this.city = data.data
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .city-list {
    padding: 0 18px 0 20px;
    .city-item {
      .icon-wrap {
        float: right;
        display: inline-flex;
        justify-content: space-around;
        align-self: center;
        align-items: center;
      }
      .aqi-box {
        display: inline-block;
        font-size: 10px;
        line-height: normal;
        color: #fff;
        padding: 2px 4px;
        border-radius: 4px;
        margin-right: 12px;
      }
      .next-page {
        font-size: 13px;
        color: #929292;
      }
    }
  }
</style>
<template>
  <div class="air-map">
    <navigator :show-share="true" title="空气质量地图"/>
    <p v-show="!showChart">chart err.</p>
    <div ref="chart"
         class="chart map"
         v-show="showChart"
         v-echarts="chartOptions"></div>
  </div>
</template>

<script>
  import navigator from '../components/navigator'
  import axios from 'axios'
  import V_Echarts from 'vue-echarts-directive'
  import 'echarts/extension/bmap/bmap'
  import { getLocation} from "../api"

  export default {
    name: 'airMap',
    components: {
      navigator
    },
    directives: {
      'echarts': V_Echarts
    },
    data() {
      return {
        chartOptions: {},
        showChart: false
      }
    },
    methods: {
      initChart(mapData) {
        const chart = this.$refs.chart.echartsInstance
        // if (mapData.length <= 0) return
        console.log(mapData)
        // this.chartOptions = {
        //   tooltip: {},
        //   xAxis: {
        //     data: ['A', 'B', 'C', 'D', 'E']
        //   },
        //   yAxis: {},
        //   series: [
        //     {
        //       name: 'Num',
        //       type: 'bar',
        //       data: [5, 20, 36, 10, 10]
        //     }
        //   ]
        // }
        let center = mapData[300].place
        this.chartOptions = {
          bmap: {
            // 百度地图中心经纬度
            center: [center.lon, center.lat],
            // 百度地图缩放
            zoom: 12,
            // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
            roam: true,
            // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
            mapStyle: {}
          },
          series: [{
            type: 'scatter',
            // 使用百度地图坐标系
            coordinateSystem: 'bmap',
            // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
            data: [ [120, 30, 1] ]
          }]
        }

      },
      getMapData() {
        const URL = 'http://localhost:3000/map'
        return axios.get(URL)
      }
    },
    mounted() {
      // getLocation().then(({data}) => {
      //   console.log('location', data)
      // })
      this.getMapData().then(({data}) => {
        this.showChart = data.success
        if (data.success) {
          this.initChart(data.data.map)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb";

  .air-map {
    padding-top: @navigator-h;
    .chart {
      margin-top: -@navigator-h;
      padding-top: @navigator-h;
      box-sizing: border-box;
      height: 100vh;
      width: 100vw;
    }
  }
</style>
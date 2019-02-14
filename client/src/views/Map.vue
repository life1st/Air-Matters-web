<template>
  <div class="air-map">
    <navigator :show-share="true" title="空气质量地图"/>
    <p v-show="!showChart">chart err.</p>
    <div class="chart" ref="map"></div>
  </div>
</template>

<script>
  import navigator from '../components/navigator'
  import { getMapData } from "../api"
  import { arcRect } from "../utils/canvas"

  export default {
    name: 'airMap',
    components: {
      navigator
    },
    data() {
      return {
        showChart: true
      }
    },
    methods: {
      initChart(mapData) {
        const MAP = new BMap.Map(this.$refs.map)
        MAP.addControl(new BMap.NavigationControl());

        let center = mapData[300].place
        var myCity = new BMap.LocalCity()
        myCity.get(res => {
          MAP.centerAndZoom(res.center, 9)
        })

        var canvasLayer = new BMap.CanvasLayer({
          update: update
        })

        function update() {
          const ctx = this.canvas.getContext("2d")
          if (!ctx) return

          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

          let points = []
          mapData.forEach(city => {
            if (!city.place) return
            const {
              place: { lat, lon},
              // latest: {update_time: updateTime, readings}
              latest
            } = city
            if (lat && lon) {
              points.push({loc: new BMap.Point(lon, lat), latest})
            }
          })

          const COLOR_MAP = [
            '#31cd31',
            '#d9d726',
            '#e88019',
            '#e02d1c',
            '#af32ba',
          ]
          for (var i = 0, len = points.length; i < len; i++) {
            const WIDTH = 15 // px
            const RADIUS = 5
            // 绘制时需要对经纬度进行转换
            var pixel = MAP.pointToPixel(points[i].loc)

            let index = points[i].latest.readings[0].value / 60
            if (index > 4) index = 4
            else index = Math.ceil(index)

            arcRect(ctx, RADIUS, {x: pixel.x, y: pixel.y, w: WIDTH, h: WIDTH}, COLOR_MAP[index])
            ctx.fillStyle = '#fff'
            ctx.fillText(points[i].latest.readings[0].value, pixel.x, pixel.y + RADIUS + 6, WIDTH)
          }
        }

        MAP.addOverlay(canvasLayer)
      },

    },
    mounted() {
      // getLocation().then(({data}) => {
      //   console.log('location', data)
      // })
      // return

      getMapData().then((data) => {
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

  .map {
    height: 40vh;
  }

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
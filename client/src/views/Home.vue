<template>
  <div class="home" v-if="hotCitys.length > 0">
    <div class="title">
      <p>收藏的地点</p>
    </div>
    <city-card v-for="city in hotCitys" :key="city.name" :cityInfo="city"/>
  </div>
</template>
<script>
  import cityCard from '../components/city/card'
  import { getAllCitys } from "../api";

  export default {
    name: "home",
    data() {
      return {
        citys: [],
        hotCitys: []
      }
    },
    components: {
      cityCard
    },
    methods: {
      getHotCitys() {
        let citys = ['beijing', 'shanghai', 'chongqing']
        let allCitys = this.citys
        this.hotCitys = allCitys.filter(city => {
          city = city.name.toLowerCase()
          for (let hot of citys) {
            if (city.indexOf(hot) != -1) {
              return true
            }
          }
        })
      }
    },
    created() {
      getAllCitys().then(res => {
        this.citys = res
        this.getHotCitys()
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>
<style scoped lang="less">
  .home {
    background-color: #f1f1f1;
    min-height: 100%;
  }
</style>

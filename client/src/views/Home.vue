<template>
  <div class="home">
    <div class="title">
      <p>收藏的地点</p>
    </div>
    <city-card />
  </div>
</template>
<script>
  import cityCard from '../components/city/card'
  import { getAllCity } from "../api";

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
        this.hotCitys = this.citys.filter(city => {
          city = city.name.toLowerCase()
          citys.forEach(hot => {
            console.log(hot, city)
            return city.indexOf(hot) != -1
          })
        })
      }
    },
    created() {



      getAllCity().then(res => {
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

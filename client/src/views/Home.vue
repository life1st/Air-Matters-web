<template>
  <div class="home-wrap">
    <navigator :show-share="true" />
    <div class="home" v-if="citys.length > 0">
      <div class="title">
        <p>收藏的地点</p>
      </div>
      <cityCard
        :cityInfo="city"
        :key="city.name"
        v-for="city in citys" />
    </div>
    <div class="home" v-else>
      <p style="margin: 0; padding: 12px 0; color: #ccc;">No data yet.</p>
    </div>
  </div>
</template>
<script>
  import navigator from '../components/navigator'
  import cityCard from '../components/city/card'
  import { getAllCitys } from "../api";
  import API_USER from '../utils/api/user'
  import CacheArray, {KEYS} from '../utils/cache'

  const collection_places = new CacheArray(KEYS.COLLECTION_PLACES)

  export default {
    name: "home",
    data() {
      return {
        citys: [],
      }
    },
    components: {
      cityCard,
      navigator
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
      // getAllCitys().then(res => {
      //   this.citys = res
      //   this.getHotCitys()
      // }).catch(err => {
      //   console.log(err)
      // })
      // API.standard().then(res => {
      //   console.log(res)
      // })
      API_USER.collection().then(res => {
        console.log(res)
        if (res.status === 200) {
          this.citys = res.data.places
        }
      })
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/verb";
  .home-wrap {
    padding-top: @navigator-h;
  }
  .home {
    background-color: #f1f1f1;
    min-height: 100vh;
    .title {
      font-size: 35px / 3;
      margin-left: 18px /3;
      padding-top: 62px / 3;
      text-align: left;
      box-sizing: border-box;
      color: #6e6e6e;
      p {
        padding-left: 33px / 3;
        margin: 0;
      }
    }
  }
</style>

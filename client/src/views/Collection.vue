<template>
  <div class="collection">
    <navigator
      @onAddClick="handleAddClick"
      :title="naviTitle"
      :show-add="isShowAdd"
      :showSearch="isShowSearch"
      :showBack="true" />
    <transition :name="transitionName" >
      <router-view
        @placeAdd="handlePlaceAdd"
        @countryItemClick="handleCountryClick"
        @landItemClick="handleLandClick" />
    </transition>
  </div>
</template>

<script>
  import navigator from '../components/navigator'
  import CacheArray, {KEYS} from '../utils/cache.js'

  const collectionPlaces = new CacheArray(KEYS.COLLECTION_PLACES)

  export default {
    name: 'collection',
    components: {
      navigator
    },
    data() {
      return {
        data: [],
        isShowAdd: true,
        isShowSearch: false,
        naviTitle: '',
        transitionName: '',
        routeQuery: {}
      }
    },
    computed: {
      
    },
    watch: {
      '$route' (to, from) {
        this.handleRouteSwitch(to.name)
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      },
      '$route.query' (after, before) {
        console.log(before, after)
      }
    },
    methods: {
      handleRouteSwitch(name) {
        switch (name) {
          case 'collection-main':
            this.isShowAdd = true
            this.isShowSearch = false
            this.naviTitle = '收藏的地点'
            break
          case 'Add':
            this.isShowAdd = false
            this.isShowSearch = true
            break
          default:
            this.isShowSearch = false
            this.isShowAdd = false
        }
      },
      handlePlaceAdd(place) {
        console.log(place)
        collectionPlaces.push(place)
        this.$router.replace({
          path: '/collection'
        })
      },
      handleLandClick(val) {
        let len = Object.keys(this.routeQuery).length
        console.log(len)
        this.routeQuery = {
          ...this.routeQuery,
          [`place${len}`]: val
        }
        this.$router.push({
          name: 'Add',
          query: this.routeQuery
        })
        // console.log(val)
        // this.$router.push({
        //   path: `/collection/add/${val}`
        // })
      },
      handleCountryClick(val) {
        let name = val.name
        this.$router.push({
          path: `${this.$route.path}/${name}`
        })
      },
      handleAddClick() {
        this.$router.push({
          path: `/collection/add`
        })
      },
    },
    mounted() {
      const {path, name} = this.$route
      this.handleRouteSwitch(name)
    }
  }
</script>

<style scoped lang="less">
  .collection {
    padding-top: 58px;
    overflow-x: hidden;
  }
  .navigator {

  }
</style>
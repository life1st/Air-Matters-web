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
        :lands="lands"
        :country="country"
        @countryItemClick="handleCountryClick"
        @landItemClick="handleLandClick" />
    </transition>
  </div>
</template>

<script>
  import navigator from '../components/navigator'
  import { getCountryList} from "../api/collection"

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
        transitionName: ''
      }
    },
    computed: {
      lands() {
        let lands = []
        Object.keys(this.data).forEach(land => {
          lands.push(land)
        })
        return lands
      },
      country() {
        let params = this.$route.params
        return params.land && this.data[params.land] || []
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to.name)
        switch (to.name) {
          case 'collection-main':
            this.isShowAdd = true
            this.isShowSearch = false
            this.naviTitle = '收藏的地点'
            break
          case 'lands':
            this.isShowAdd = false
            this.isShowSearch = true
            this.naviTitle = ''
            break
          case 'Country':
            this.naviTitle = to.params.land
            break
          case 'City':
            this.naviTitle = to.params.country
            break
          default:
            this.isShowSearch = false
            this.isShowAdd = false
        }
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      }
    },
    methods: {
      handleLandClick(val) {
        this.$router.push({
          path: `/collection/add/${val}`
        })
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
      }
    },
    created() {
      getCountryList().then(({data}) => {
          if (data.ok) {
            this.data = data.data
          }
        }).catch(err => {
          // needn't handle this.
      })
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
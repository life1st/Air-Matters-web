<template>
  <div class="collection">
    <navigator
      @onAddClick="handleAddClick"
      :show-add="true"
      :show-back="true" />
    <transition :name="transitionName" mode="out-in">
      <router-view
        :lands="lands"
        :country="country"
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
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    methods: {
      handleLandClick(val) {
        this.$router.push({
          path: `/collection/add/${val}`
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
  }
  .navigator {

  }
</style>
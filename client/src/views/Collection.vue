<template>
  <div class="collection">
    <router-view
      :lands="lands"
      :country="country" @landItemClick="handleLandClick"  />
  </div>
</template>

<script>
  import { getCountryList} from "../api/collection"

  export default {
    name: 'collection',
    components: {

    },
    data() {
      return {
        data: []
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
    methods: {
      handleLandClick(val) {
        console.log(val)
        this.$router.push({
          path: `/collection/add/${val}`
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

<style scoped>

</style>
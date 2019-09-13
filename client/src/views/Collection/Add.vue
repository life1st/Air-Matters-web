<template>
  <transition :name="transitionName">
    <div>
      <pureList
        class="add-list"
        :data="currentLevel"
        @itemClick="toNextLevel" >
        <div slot-scope="{slotProp}" class="list-content">
          <span class="list-item-name">{{slotProp.data.name}}</span>
          <span v-if="slotProp.data.brief" class="aqi budget" :style="{backgroundColor: slotProp.data.brief.color}">{{slotProp.data.brief.text}}</span>
          <span 
            class="icon-wrap"
            :style="{marginLeft: 18}"
            v-if="slotProp.data.type !== PLACE_TYPES.station"
          >
            <i class="iconfont right next-page">&#xe655;</i>
          </span>
        </div>
      </pureList>
    </div>
  </transition>
</template>

<script>
  import pureList from '../../components/pureList'
  import { getPlaceData} from "../../api/collection"
  import API from '../../utils/api'
  import {PLACE_TYPES} from '../../utils/api/consts'
  import CacheArray, {KEYS} from '../../utils/cache'

  const collection_places = new CacheArray(KEYS.COLLECTION_PLACES)

  export default {
    name: "CollectionAdd",
    components: {
      pureList
    },
    data() {
      return {
        PLACE_TYPES,
        transitionName: '',
        params: {},
        listData: [],
        searchText: '',
        searchData: null,
        places: {}, // place_id: current level
        currentLevel: []
      }
    },
    watch: {
      placeId(newId, oldId) {
        if (newId && newId !== oldId) {
          this.fetchPlaces(newId)
        }
      }
    },
    computed: {
      placeId() {
        return this.$route.query.place_id
      },
      countryName() {
        return this.$route.params.countryName
      }
    },
    methods: {
      fetchPlaces(id) {
        const cachedPlaces = this.places[String(id)]
        if (cachedPlaces) {
          this.currentLevel = cachedPlaces
          return 
        }
        API.places(id).then(res => {
          const {status, data} = res
          if (status === 200) {
            this.currentLevel = data.places.sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt())
            this.places = {
              ...this.places,
              [id]: data.places
            }
          }
        })
      },
      toNextLevel(payload) {
        const {place_id} = payload.data
        console.log(payload)
        // const currentClickedPlace = this.cachedPlaces[place_id]
        const currentClickedPlace = this.currentLevel.find(item => item.place_id === place_id)
        if (currentClickedPlace.type === PLACE_TYPES.station) {
          this.$emit('placeAdd', currentClickedPlace)
          return
        }
        if (place_id) {
          this.$router.push({
            path: `/collection/add?place_id=${place_id}`
          })
        }
      },
      initListData() {
        getPlaceData().then(({data}) => {
          if (data.ok) {
            if (this.countryName) {
              this.listData = data.data[this.countryName]
            } else {
              this.listData = data.data
            }
          }
        })
      },
      handleSearch() {
        const {searchText} = this
        if (searchText.trim()) {
          API.search(searchText).then(res => {
            const {status, data} = res
            if (status === 200) {
              this.searchData = data.places
            }
          })
        }
      },
      handlePlaceAdd(place) {
        console.log(place)
        collection_places.push(place)
      }
    },
    mounted() {
      this.fetchPlaces(this.placeId)
      // if (Object.keys(this.$route.query).length === 0) {
      //   // this.initListData()
      // } else {
      //   let { placeId} = this.$route.query
      //   if (!placeId) {
      //     this.$router.replace({
      //       path: '/collection/add'
      //     })
      //     return
      //   }
      //   this.toNextLevel(placeId)
      // }
      
    }
  }
</script>

<style scoped lang="less">
  .add-list {
    padding: 0 18px 0 20px;
    .icon-wrap {
      float: right;
      display: inline-flex;
      justify-content: space-around;
      align-self: center;
      align-items: center;
    }
  }

  .list-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .list-item-name {
    flex: 1;
  }
  .budget {
    display: inline-block;
    &.aqi {
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      height: 30px;
      line-height: 30px;
      padding: 0 12px;
      border-radius: 4px;
    }
  }
</style>
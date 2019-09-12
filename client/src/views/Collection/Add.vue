<template>
  <transition :name="transitionName">
    <div>
      <div class="search" v-if="false">
        <input class="search-input" type="text" v-model="searchText">
        <button @click="handleSearch">Go</button>
        <ul class="search-data-list" v-if="searchData" >
          <li 
            :key="place.place_id" 
            v-for="place in searchData"
          >
            <span>{{place.place_id}}</span>
            <span @click="handlePlaceAdd(place)">Add</span>
          </li>
        </ul>
      </div>
      <pureList
        class="add-list"
        :data="currentLevel"
        @itemClick="toNextLevel" >
        <div slot-scope="{slotProp}">
          <div v-if="placeId">
            <span>{{slotProp.data.name}}</span>
          </div>
          <div v-else>
            <span style="margin-right: 6px;">{{slotProp.key}}</span>
            <span class="title">{{slotProp.data.name}}</span>
            <span class="icon-wrap">
              <i class="iconfont right next-page">&#xe655;</i>
            </span>
          </div>
        </div>
      </pureList>
    </div>
  </transition>
</template>

<script>
  import pureList from '../../components/pureList'
  import { getPlaceData} from "../../api/collection"
  import API from '../../utils/api'
  import CacheArray, {KEYS} from '../../utils/cache'

  const collection_places = new CacheArray(KEYS.COLLECTION_PLACES)

  export default {
    name: "CollectionAdd",
    components: {
      pureList
    },
    data() {
      return {
        transitionName: '',
        params: {},
        listData: [],
        searchText: '',
        searchData: null,
        places: {}, // place_id: next_level
        currentLevel: []
      }
    },
    watch: {
      placeId(newId, oldId) {
        // todo do something now don't know
        console.log(newId, oldId)
        // this.toNextLevel(placeId)
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
        API.places(id).then(res => {
          const {status, data} = res
          if (status === 200) {
            this.currentLevel = data.places
          }
        })
      },
      toNextLevel(payload) {
        console.log(payload)
        const {place_id} = payload.data
        if (place_id) {
          this.$router.push({
            path: `/collection/add?place_id=${place_id}`
          })
        }
        // let { placeId } = payload.data
        // if (!placeId) {
        //   this.$router.push({
        //     path: `/collection/add/${payload.key}`
        //   })
        // } else {
        //   getPlaceData(placeId)
        //     .then(({data}) => {
        //       if (data.ok) {
        //         this.listData = data.data
        //       }
        //     })
        // }
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
      this.fetchPlaces()
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

  .search-input {
    border: 1px solid #eee;
    &:focus {
      outline: none;
    }
  }
</style>
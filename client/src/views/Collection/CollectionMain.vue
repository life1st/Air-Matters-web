<template>
  <div class="collection-main">
    <dragList 
      class="collection-list" 
      :data="collectionList"
      @dragStart='handleDragStart'
      @dragEnd='handleDragEnd'
      @dataUpdate='handleDataUpdate'
    >
      <div slot-scope="{slotProp}">
        <i class="iconfont garbage-bin" @click="handleRemoveItem(slotProp.data)">&#xe62d;</i>
        <span>{{slotProp.data.name}}</span>
      </div>
      <template v-slot:dragItem='{dragItem}'>
        <div v-if="dragItem" class="content">
          <i class="iconfont garbage-bin">&#xe62d;</i>
          <span class="data">{{dragItem.name}}</span>
          <i class="iconfont drag">&#xe707;</i>
        </div>
      </template>
    </dragList>
    <div v-if="collectionList.length === 0">
      no data yet.
    </div>
  </div>
</template>

<script>
  import dragList from '../../components/dragList'
  import CacheArray, {KEYS} from '../../utils/cache'
  import USRE_API from '../../utils/api/user'

  const collectionPlaces = new CacheArray(KEYS.COLLECTION_PLACES)

  export default {
    name: "CollectionMain",
    components: {
      dragList
    },
    data() {
      return {
        collectionList: []
      }
    },
    methods: {
      handleDragStart() {
        this.originCollectionList = [...this.collectionList]
      },
      handleDragEnd(_unused) {
        if (this.originCollectionList && this.collectionList.map(place => place.place_id).join('') 
        !== this.originCollectionList.map(place => place.place_id).join('')) {
          USRE_API.sort(this.collectionList.map(item => item.place_id), 'fake@pwd')
        }
        this.originCollectionList = null
      },
      handleDataUpdate(data) {
        this.collectionList = data
        // collectionPlaces.replace(data)
      },
      handleRemoveItem(item) {
        console.log(item)
        if (window.confirm(`确认移除${item.name}?`)) {
          const {place_id} = item
          const currentPlaces = [...this.collectionList].filter(item => item.place_id !== place_id)
          this.handleDataUpdate(currentPlaces)
        }
      }
    },
    mounted() {
      // const cachedCollectionPlaces = collectionPlaces.get()
      // console.log(cachedCollectionPlaces)
      // if (cachedCollectionPlaces) {
      //   this.handleDataUpdate(cachedCollectionPlaces)
      // }
      USRE_API.collection().then(res => {
        const {status, data} = res
        if (status === 200) {
          this.collectionList = data.places
        } else {
          throw {err: 'network error'}
        }
      }).catch(e => {
        console.error(e)
      })
    }
  }
</script>

<style scoped lang="less">
  .collection-main {
    background-color: #eee;
    margin-top: -58px;
    padding-top: 78px;
    min-height: 100vh;
    box-sizing: border-box;
    .collection-list {
      background-color: #fff;
    }
  }
</style>
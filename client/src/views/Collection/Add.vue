<template>
  <transition :name="transitionName">
    <pureList
      class="add-list"
      :data="listData"
      @itemClick="toNextLevel" >
      <div slot-scope="{slotProp}" v-if="placeId">
        <span>{{slotProp.data}}</span>
      </div>
      <div slot-scope="{slotProp}" v-if="!placeId">
        <span>{{slotProp.key}}</span>
        <!--<span class="title">{{slotProp.key}}</span>-->
        <span class="icon-wrap">
        <i class="iconfont right next-page">&#xe655;</i>
      </span>
      </div>
    </pureList>
  </transition>
</template>

<script>
  import pureList from '../../components/pureList'
  import { getPlaceData} from "../../api/collection"

  export default {
    name: "CollectionAdd",
    components: {
      pureList
    },
    data() {
      return {
        transitionName: '',
        params: {},
        listData: []
      }
    },
    watch: {
      placeId(newId, oldId) {
        // todo do something now don't know
        // this.toNextLevel(placeId)
      }
    },
    computed: {
      placeId() {
        return this.$route.query.place
      },
      countryName() {
        return this.$route.params.countryName
      }
    },
    methods: {
      toNextLevel(payload) {
        let { placeId } = payload.data
        if (!placeId) {
          this.$router.push({
            path: `/collection/add/${payload.key}`
          })
        } else {
          getPlaceData(placeId)
            .then(({data}) => {
              if (data.ok) {
                this.listData = data.data
              }
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

      }
    },
    mounted() {
      if (Object.keys(this.$route.query).length === 0) {
        this.initListData()
      } else {
        let { placeId} = this.$route.query
        if (!placeId) {
          this.$router.replace({
            path: '/collection/add'
          })
          return
        }
        this.toNextLevel(placeId)
      }
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
</style>
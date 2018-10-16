<template>
  <pureList
    class="add-list"
    :data="lands"
    @itemClick="handleLandClick" >
    <template slot-scope="{data}">
      <span class="title">{{data}}</span>
      <span class="icon-wrap">
        <i class="iconfont right next-page">&#xe655;</i>
      </span>
    </template>
  </pureList>
</template>

<script>
  import pureList from '../../components/pureList'
  export default {
    name: "CollectionAdd",
    components: {
      pureList
    },
    props: {
      lands: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        params: {}
      }
    },
    methods: {
      handleLandClick(item) {
        this.$emit('landItemClick', item)
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
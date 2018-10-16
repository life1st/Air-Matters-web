<template>
  <div class="collection-main">
    <dragList class="collection-list" :data="collectionList" />
  </div>
</template>

<script>
  import dragList from '../../components/dragList'

  export default {
    name: "CollectionMain",
    components: {
      dragList
    },
    data() {
      return {
        collectionList: [
          'Beijing',
          'Shanghai',
          'Hangzhou',
          'Chongqing',
          'Wuhan',
        ]
      }
    },
    methods: {

    },
    created() {

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
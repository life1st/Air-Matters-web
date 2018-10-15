<template>
  <div class="collection-main">
    <p>collection-main</p>
    <dragList :data="collectionList" />
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
        collectionList: []
      }
    },
    methods: {

    },
    created() {

    }
  }
</script>

<style scoped>

</style>
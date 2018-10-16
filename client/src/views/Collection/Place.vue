<template>
  <pureList :data="place">

  </pureList>
</template>

<script>
  import pureList from '../../components/pureList'

  export default {
    name: "Place",
    components: {
      pureList
    },
    data() {
      return {
        place: []
      }
    },
    created() {

    }
  }
</script>

<style scoped>

</style>
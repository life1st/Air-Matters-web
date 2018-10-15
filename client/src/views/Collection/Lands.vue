<template>
  <pureList :data="lands" @itemClick="handleLandClick" />
</template>

<script>
  import pureList from '../../components/pureList'
  export default {
    name: "Country",
    components: {
      pureList
    },
    props: {
      lands: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleLandClick(item) {
        this.$emit('landItemClick', item)
      }
    }
  }
</script>

<style scoped>

</style>
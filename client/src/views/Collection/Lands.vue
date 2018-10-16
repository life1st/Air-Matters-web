<template>
  <pureList
    class="lands-list"
    :data="lands"
    @itemClick="handleLandClick" />
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

<style scoped lang="less">
  .lands-list {
    padding: 0 18px 0 20px;
  }
</style>
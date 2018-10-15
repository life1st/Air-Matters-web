<template>
  <pureList :data="country" @itemClick="handleItemClick">
    <template slot-scope="{data}" >
      <img :src="data.bgImg" :alt="`${data.name}'s flag`">
      <span class="text">{{data.name}}</span>
    </template>
  </pureList>
</template>

<script>
  import pureList from '../../components/pureList'

  export default {
    name: "Country",
    components: {
      pureList
    },
    props: {
      country: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleItemClick(val) {
        this.$emit('countryItemClick', val)
      }
    }
  }
</script>

<style scoped lang="less">

</style>
<template>
  <pureList class="country-list" :data="country" @itemClick="handleItemClick" >
    <div slot-scope="{data}" class="country-item">
      <!--<img :src="data.bgImg" :alt="`${data.name}'s flag`">-->
      <span class="img"></span>
      <span class="text">{{data.name}}</span>
    </div>
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
  .country-list {
    background: #fff;
    .country-item {
      display: flex;
      align-items: center;
    }
    .img {
      display: block;
      width: 30px;
      height: 20px;
      border: 1px solid #ccc;
      margin-right: 4px;
    }
  }
</style>
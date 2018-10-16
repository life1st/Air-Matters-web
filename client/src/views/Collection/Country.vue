<template>
  <pureList class="country-list" :data="country" @itemClick="handleItemClick" >
    <div slot-scope="{data}" class="country-item">
      <!--<img :src="data.bgImg" :alt="`${data.name}'s flag`">-->
      <span class="img" :style="{backgroundColor: randomColor()}"></span>
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
    computed: {

    },
    methods: {
      handleItemClick(val) {
        this.$emit('countryItemClick', val)
      },
      randomColor() {
        let colorList = ['FFDEAD', '98F5FF', '4EEE94', '00BFFF', '7FFFD4', 'CD5C5C', 'FFD39B', 'FFB6C1', 'CDC9C9', 'CD0000',]
        const index = Math.floor(Math.random() * colorList.length)
        return `#${colorList[index]}`
      }
    }
  }
</script>

<style scoped lang="less">
  .country-list {
    background: #fff;
    padding: 0 18px 0 20px;
    .country-item {
      display: flex;
      align-items: center;
    }
    .img {
      @w: 24px;
      display: block;
      width: @w;
      height: @w * 2 / 3;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 6px;
    }
  }
</style>
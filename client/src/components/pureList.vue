<template>
  <ul class="list" v-if="!!data">
    <li class="item"
        :key="index"
        @click="handleItemClick(item, index)"
        v-for="(item, index) in data" >
      <slot :slotProp="{data: item, key: index}">
        <span class="text">{{item}}</span>
      </slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "pureList",
    props: {
      data: {
        type: [Array, Object],
      }
    },
    methods: {
      handleItemClick(item, index) {
        // if data is Object, the 'index' will be 'key'
        this.$emit('itemClick', {data: item, key: index})
      }
    }
  }
</script>

<style scoped lang="less">
  .list {
    .item {
      text-align: left;
      line-height: 58px;
      height: 60px;
      overflow: hidden;
    }
  }
</style>
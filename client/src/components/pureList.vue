<template>
  <ul class="list">
    <li class="item"
        :key="index"
        @click="handleItemClick(item)"
        v-for="(item, index) in data" >
      <slot :data="item">
        <span class="text">{{item}}</span>
        <span class="icon">
          <i class="iconfont right">&#xe655;</i>
        </span>
      </slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "pureList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleItemClick(item) {
        this.$emit('itemClick', item)
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
      .icon {
        float: right;
      }
      overflow: hidden;
    }
  }
</style>
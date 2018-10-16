<template>
  <ul class="drag-list">
    <li class="drag-item"
        :class="moveAble ? 'on-move': ''"
        :key="item.id || index"
        v-for="(item, index) in data" >
      <slot>
        <i class="iconfont garbage-bin">&#xe62d;</i>
        <span class="data">{{item}}</span>
      </slot>
      <i class="iconfont drag"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd">&#xe707;</i>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "dragList",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        dragId: null,
        onMove: false,
        moveAble: false
      }
    },
    methods: {
      handleItemMove() {
        this.onMove = true
      },
      handleTouchStart(e) {
        const SUCCESS_TIME = 800 //ms
        this.dragId = setTimeout(() => {
          this.handleItemMove()
        }, SUCCESS_TIME)
      },
      handleTouchEnd(e) {
        this.onMove = false
      },
      handleTouchMove(e) {
        let finger0 = e.changedTouches[0]
        if (this.onMove) {
          let itemY = finger0.screenY
          console.log(itemY)
        }
      },

    }
  }
</script>

<style scoped lang="less">
  .drag-list {
    list-style: none;
    padding: 0;
    margin: 0;
    .drag-item {
      height: 62px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      .iconfont {
        font-size: 22px;
        line-height: 62px;
        height: 100%;
        &.garbage-bin {
          color: #75767a;
          margin-left: 20px;
          margin-right: 24px;
        }
        &.drag {
          margin-right: 30px;
        }
      }
      .data {
        flex-grow: 1;
        text-align: left;
      }
    }
  }
</style>
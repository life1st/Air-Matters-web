<template>
  <div>
    <ul class="drag-list"
      ref="containor"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <li class="drag-item"
          :ref="item"
          :class="dragItem === item ? 'on-drag': ''"
          :key="item.id || index"
          v-for="(item, index) in data" >
          <div class="content">
            <slot>
              <i class="iconfont garbage-bin">&#xe62d;</i>
              <div class="data"><span>{{item}}</span></div>
            </slot>
            <i class="iconfont drag"
              @touchstart="handleTouchStart(item, $event)"
            >
              &#xe707;
            </i>
          </div>
      </li>
    </ul>
    <div 
      class="drag-item drag-show" 
      ref="dragItem"
      v-show="!!dragItem"
      :style='{
        top: this.dragItemY + "px"
      }'
    >
        <div class="content">
          <i class="iconfont garbage-bin">&#xe62d;</i>
          <span class="data">{{dragItem}}</span>
          <i class="iconfont drag">&#xe707;</i>
        </div>
    </div>
  </div>
</template>

<script>
  const itemHeight = 63 //px
  
  export default {
    name: "dragList",
    props: {
      data: {
        type: Array,
        default: () => []
      },
      onListChange: {
        type: Function
      }
    },
    data() {
      return {
        onMove: false,
        moveAble: false,
        dragItem: null,
        dragItemY: null,
      }
    },
    mounted() {
      this.storeContextFunc = window.oncontextmenu
      window.oncontextmenu = () => false
      this.baseTop = this.$refs.containor.offsetTop
    },
    beforeDestroy() {
      window.oncontextmenu = this.storeContextFunc
    },
    methods: {
      handleTouchStart(item, e) {
        const SUCCESS_TIME = 200 //ms
        
        this.dragId = setTimeout(() => {
          const itemTop = this.$refs[item][0].offsetTop

          this.dragItem = item
          this.dragItemY = itemTop
        }, SUCCESS_TIME)
      },
      handleTouchEnd(e) {
        clearTimeout(this.dragId)
        this.dragItemY = itemHeight * (this.data.indexOf(this.dragItem) + 1)
        this.dragItem = null
      },
      handleTouchMove(e) {
        e.preventDefault()
        const touchs = e.targetTouches
        const startIndex = this.data.indexOf(this.dragItem)
        if (touchs[0]) {
          const dragItemY = Math.floor(touchs[0].pageY - this.baseTop + itemHeight / 2)
          const nowIndex = Math.floor(dragItemY / itemHeight)
          const tempData = [...this.data]
          if ((startIndex !== -1)
          && (nowIndex !== -1)
          && (nowIndex < tempData.length)
          && nowIndex !== startIndex            
          ) {
            [tempData[startIndex], tempData[nowIndex]] = [tempData[nowIndex], tempData[startIndex]]

            this.$emit('dataUpdate', tempData)
          }
          this.dragItemY = dragItemY
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
  }
  .drag-item {
      height: 62px;
      border-bottom: 1px solid #ccc;
      font-size: 18px;
      position: relative;
      background-color: #fff;
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &.on-drag {
        background-color: #eee;
        .content {
          opacity: 0;
        }
      }
      &.drag-show {
        position: absolute;
        left: 0;
        width: 100%;
        transform: scale(1.04);
        opacity: .9;
      }
      .iconfont {
        font-size: 22px;
        line-height: 62px;
        height: 100%;
        user-select: none;
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
</style>
<template>
  <div class="setting">
    <navigator :showBack="true" title="设置"/>
    <pureList
      class="setting-list"
      :data="setting"
      v-for="setting in settingList" >
      <div class="setting-item" slot-scope="{data}">
        <span class="text">{{data.name}}</span>
      </div>
    </pureList>
  </div>
</template>

<script>
  import navigator from '../components/navigator'
  import pureList from '../components/pureList'
  export default {
    name: 'setting',
    components: {
      navigator,
      pureList
    },
    data() {
      return {
        settingList: [
          [
            {name: '常见问题', to: 'Q&A'},
          ],
          [
            {name: '通知', to: 'Q&A'},
            {name: '常驻通知', to: 'notification'}
          ],
          [
            {name: '设置同步', to: 'sync'}
          ],
          [
            {name: '空气质量计算标准', to: 'aqiStandard'},
            {name: '显示设置', to: 'display'},
            {name: '去除广告', to: 'donate'},
            {name: '隐私', to: 'privacy'},
          ],
          [
            {
              name: '自动刷新',
              desc: '开启后每十分钟更新一次数据',
              option: true
            }
          ]
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb";
  .setting {
    padding-top: @navigator-h;
    background: #e8e8e8;
    .setting-list {
      margin: 12px 0;
      background: #fff;
    }
    .setting-item {
      padding-left: 20px;
      padding-right: 18px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }
</style>
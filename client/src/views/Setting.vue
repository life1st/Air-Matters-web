<template>
  <div class="setting">
    <navigator :showBack="true" title="设置"/>
    <pureList
      class="setting-list"
      v-for="(setting, index) in settingList"
      :data="setting"
      :key="index"
    >
      <template slot-scope="{slotProp}">
        <span class="text">{{slotProp.data.name}}</span>
      </template>
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

<style lang="less">
  @import "../assets/css/verb";
  .setting {
    @import "../components/pureList/default";
    padding-top: @navigator-h;
    background: #e8e8e8;
    .setting-list {
      margin: 12px 0;
      background: #fff;
    }
  }
</style>
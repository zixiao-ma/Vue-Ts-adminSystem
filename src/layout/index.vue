<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"/>
      <m-menu></m-menu>
    </a-layout-sider>
    <a-layout>
      <m-header></m-header>
      <a-layout-content style="margin: 0 16px">
        <tags-view></tags-view>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import MMenu from './components/Menu.vue';
import MHeader from './components/Header.vue';
import {ref} from 'vue';
import TagsView from '@/layout/components/TagsView.vue';

const collapsed = ref<boolean>(false);

</script>
<style lang="scss" scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}


/*.ant-layout-sider {
  background: #03a9f4 !important;
}

::v-deep .ant-layout-sider-trigger {
  background: #03a9f4 !important;
  color: #fff !important;
  border-top: 1px solid #ddd;
}*/
</style>

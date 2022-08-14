<template>
  <div v-for="(item,index) in itemData" :key="index">
    <a-menu-item v-if="item.children&&item.children.length<=0" :key="item.meta.key" @click="$router.push(item.path)">

      <span>{{ item.meta.title }}</span>
    </a-menu-item>
    <a-sub-menu v-else :key="item.meta.key">
      <template #title>
                <span>
                 <setting-outlined v-if="item.meta.title==='系统管理'"/>
                  <team-outlined v-if="item.meta.title==='审批管理'"/>
                    <span>{{ item.meta.title }}</span>
                </span>
      </template>
      <menu-item :data="item.children"></menu-item>
    </a-sub-menu>
  </div>
</template>

<script setup>
import {
  SettingOutlined
  , TeamOutlined
} from '@ant-design/icons-vue';
import {defineProps} from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});
const itemData = props.data;
</script>
<style lang="scss" scoped>

</style>

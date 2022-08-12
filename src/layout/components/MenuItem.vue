<template>
  <div v-for="(item,index) in itemData" :key="index">
    <a-menu-item v-if="item.children&&item.children.length<=0" :key="index+''" @click="$router.push(item.path)">
      <pie-chart-outlined/>
      <span>{{ item.meta.title }}</span>
    </a-menu-item>
    <a-sub-menu v-else :key="item.path">
      <template #title>
                <span>
                  <team-outlined/>
                    <span>{{ item.meta.title }}</span>
                </span>
      </template>
      <menu-item :data="item.children"></menu-item>
    </a-sub-menu>
  </div>
</template>

<script setup>
import {
  PieChartOutlined,
  TeamOutlined
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

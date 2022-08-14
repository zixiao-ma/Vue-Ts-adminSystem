<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
    <a-menu-item :key="'shouye'" @click="$router.push('/')">
      <home-outlined/>
      <span>首页</span>
    </a-menu-item>
    <menu-item :data="menuList"></menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';
import {useStore} from 'vuex';
import MenuItem from '@/layout/components/MenuItem.vue';
import {getRouters} from '@/utils/getRouteOptions';
import {useRoute} from 'vue-router';
import {TagsType} from '@/typeing/tags';
import {HomeOutlined} from '@ant-design/icons-vue';

const store = useStore();
const menuList = getRouters(store.getters.menuList);
const selectedKeys = ref<string[]>([]);
const tags = store.getters.tags;
const route = useRoute();
watch(route, (val) => {
  const data = tags.find((item: TagsType) => item.path === val.path);
  selectedKeys.value = [data.key];
}, {immediate: true, deep: true});
</script>
<style lang="scss" scoped>


</style>

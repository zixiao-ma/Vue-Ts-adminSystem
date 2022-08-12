<template>
  <a-menu mode="inline" theme="dark">
    <menu-item :data="menuList"></menu-item>
  </a-menu>
</template>

<script lang="ts" setup>

import {useStore} from 'vuex';
import MenuItem from '@/layout/components/MenuItem.vue';
import {getRouters} from '@/utils/getRouteOptions';

const store = useStore();
const menuList = getRouters(store.getters.menuList);
</script>
<style lang="scss" scoped>

</style>

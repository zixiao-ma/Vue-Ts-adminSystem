<template>
  <div>
    用户管理
  </div>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex';

const store = useStore();
const logout = () => {
  store.commit('user/logout');
};
</script>
<style lang="scss" scoped>

</style>

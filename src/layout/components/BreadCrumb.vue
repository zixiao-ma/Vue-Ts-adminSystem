<template>
  <div class="bread">
    <span style="font-size: 16px;"><github-outlined/></span>
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item,i) in data" :key="i">{{
          item.meta.title
        }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>

</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router';
import {ref, watch} from 'vue';

import {GithubOutlined} from '@ant-design/icons-vue';

const route = useRoute();
let data = ref();
watch(route, (val) => {
  data.value = val.matched;
}, {immediate: true, deep: true});
</script>
<style lang="scss" scoped>
.bread {
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
  }
}
</style>

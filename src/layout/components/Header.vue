<template>
  <a-layout-header class="header">
    <bread-crumb></bread-crumb>
    <personal-info></personal-info>
  </a-layout-header>
</template>

<script lang="ts" setup>
import BreadCrumb from '@/layout/components/BreadCrumb.vue';
import PersonalInfo from '@/layout/components/PersonalInfo.vue';
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: #fff;
}
</style>

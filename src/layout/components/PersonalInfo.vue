<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      {{ data.userName }}
      <DownOutlined/>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;" @click="visible=true">个人信息</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="logout">退出登录</a>
        </a-menu-item>

      </a-menu>
    </template>
  </a-dropdown>
  <a-modal v-model:visible="visible" :title="data.userName+'的个人信息'">
    <p>用户ID：{{ data.userId }}</p>
    <p>用户名：{{ data.userName }}</p>
    <p>状态：{{ data.state === 1 ? '正常' : '禁用' }}</p>
    <p>邮箱：{{ data.userEmail }}</p>
    <template #footer>
    </template>
  </a-modal>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {DownOutlined} from '@ant-design/icons-vue';
import {useStore} from 'vuex';

const visible = ref<boolean>(false);
const store = useStore();
const data = store.getters.userInfo;
const logout = () => {
  store.commit('user/logout');
  window.location.reload();
};
</script>

<template>
  <div class="tagsView">
    <a-tag
        v-for="(tag,index) in data"
        :key="tag.path"
        :closable="tag.path!=='/welcome'"
        :color="tag.path===$route.path?'#108ee9':''"
        @click="$router.push(tag.path)"
        @close="handleTagClose(index)"
    >{{ tag.title }}
    </a-tag>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

const store = useStore();
const router = useRouter();
const data = store.getters.tags;
const handleTagClose = (index: number) => {
  if (index === 0) {
    return router.push('/');
  }
  store.commit('tagView/deleteTag', index);
  router.push(data[index - 1].path);
};
</script>
<style lang="scss" scoped>
.tagsView {
  margin: 5px 0;
}

</style>

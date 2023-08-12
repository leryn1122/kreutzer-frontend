<script lang="ts">
import { ConfigProvider } from 'tdesign-vue-next';
import { defineComponent } from 'vue';

import AppProvider from '@/layouts/components/AppProvider';
import { Layout } from '@kreutzer/layouts';

export default defineComponent({
  name: 'App',
  components: {
    AppProvider,
    ConfigProvider,
    Layout,
  }
})
</script>

<template>
  <ConfigProvider>
    <Layout>
      <RouterView>
        <div>RouterView</div>
      </RouterView>
    </Layout>
  </ConfigProvider>
</template>

<style lang="less" scoped>
@import url('./styles/index.less');

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>

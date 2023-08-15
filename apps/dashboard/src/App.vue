<script lang="ts" setup>
import { ConfigProvider } from 'tdesign-vue-next';
import { RouterView } from 'vue-router';
import Layout from '@kreutzer/layouts'
import AppProvider from '@/layouts/components/AppProvider';
</script>

<template>
  <ConfigProvider>
    <AppProvider>
      <Layout>
        <template #main>
          <RouterView />
        </template>
      </Layout>
    </AppProvider>
  </ConfigProvider>
</template>

<style lang="less">
@import url('./styles/index.less');

#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>

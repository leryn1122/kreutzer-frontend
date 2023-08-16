<script lang="ts" setup>
import { computed, ref, unref, watch } from 'vue';
import { RouterView } from 'vue-router';
import { ConfigProvider } from 'tdesign-vue-next';
import Layout from '@kreutzer/layouts'
import AppProvider from '@/layout/components/AppProvider';

let isDark = ref(false);

watch(
  () => unref(isDark),
  (v) => {
    document.getElementsByTagName('html')[0].className = v ? 'dark' : '';
  },
  { immediate: true },
)

const locale = computed(async () => {
  const message = {
    en_US: () => {
    },
  }
})
</script>

<template>
  <ConfigProvider :global-config="{}">
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
@import url('@/styles/index.less');

#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
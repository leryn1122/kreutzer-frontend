<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import { getHelmEnv, listRepos, Repos } from '@/apis/publish/helm';
import { columns as _columns } from './data';

let helmEnv = ref(null);
let appStores = ref();

async function listAppStores() {
  listRepos().then(res => {
    appStores.value = res.data!;
  }).catch((e) => {
    console.log(e);
  })
}

let pagination = {
  defaultCurrent: 1,
  defaultPageSize: 5,
  total: 10,
}

const columns = computed(() => {
  return _columns;
});

onMounted(async () => {
  await listAppStores();
})
</script>

<template>
  <div>AppStores refer to helm repo.</div>

  <div>
    <t-button @click="listAppStores">
      Refresh
    </t-button>
  </div>

  <div class="">
    <t-table
          ref="tableRef"
          row-key="index"
          :data="appStores ? appStores : []"
          :columns="columns"
          strip="true"
          :pagination="pagination"
          table-layout="auto"
    >
      <template #state="{ row }">
        <div style="display: flex; align-items: center">
          {{ row.state ? 'Ready' : 'NotReady' }}
        </div>
      </template>
      <template #operation="{ row }">
        <t-button>Operation</t-button>
      </template>
    </t-table>
  </div>
</template>

<style lang="less">
@import url('@/styles/index.less');
</style>
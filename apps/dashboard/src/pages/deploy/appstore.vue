<script lang="ts" setup>
import { onMounted } from 'vue';

import { getHelmEnv } from '@/apis/deploy/helm';

let appStores = [];

// onMounted(async () => {
//   const res = getHelmEnv()
//   console.log(res);
// });

</script>

<template>
  <t-button @click="getHelmEnv">App Store</t-button>
</template>
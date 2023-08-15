<template>
  <Result :status="10001"
          title="Browser incompatible"
          description="Sorry, your browser is not compatible"
  />
</template>

<script lang="ts" setup>
import Result from './result.vue';
</script>
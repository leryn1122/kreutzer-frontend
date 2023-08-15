<template>
  <Result :status="403" title="Unauthorized" description="Sorry, you are unauthorized to visit the page" />
</template>

<script lang="ts" setup>
import Result from './result.vue';
</script>
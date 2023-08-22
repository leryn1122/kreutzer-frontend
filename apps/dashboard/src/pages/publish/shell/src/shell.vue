<script lang="ts" setup>
import { ref } from "vue";
import { Terminal } from '@kreutzer/components';

let terminalActivated = ref(false);

const createTerminal = () => {
  console.log("Create websocket");
  terminalActivated.value = true;
}

</script>

<template>
  <div>
    <t-button :onClick="createTerminal">Create websockt</t-button>
    <terminal websocket="ws://localhost:8080/kube/shell?sessionId=622fbaf9-c252-49e2-a232-8f712ad852f1&clusterID=default&namespace=kreutzer&podName=kreutzer-core-7849d555d7-c24gd&containerName=core" v-if="terminalActivated">
    </terminal>
  </div>
</template>
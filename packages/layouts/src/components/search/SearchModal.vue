<template>
  <Teleport to="body">
    <div :class="`${prefixCls}`">
      <t-input clearable placeholder="Search something...">
      </t-input>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, ref, unref } from 'vue';

const prefixCls = 'kreutzer-app-search-modal';

defineProps({
  visible: {
    type: Boolean,
  }
})

const searchResult = ref([])
const keyword = ""

// const getIsNotData = computed(
//   () => !keyword || unref(searchResult).length === 0,
// )

function handleClose() {
  searchResult.value = []
  defineEmits(['close'])
}
</script>

<style lang="less">
.kreutzer-app-search-modal {
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 800;
  // display: flex;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  justify-content: center;
}
</style>
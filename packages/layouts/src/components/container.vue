
<script lang="ts">
export default { name: 'LayoutMainContainer' };
</script>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  direction: {
    type: String,
    default: '',
  }
})

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }
  return false
})
</script>

<template>
  <section class="container">
    <slot class="main">
      <div>Pages requires to be mounted!!</div>
    </slot>
  </section>
</template>

<style lang="less">
.container {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  background-color: var(--td-gray-color-2);
}

.container.is-vertical {
  flex-direction: column;
}
</style>
<script lang="ts" setup>
import { computed, ref, unref } from 'vue';
import SearchFooter from './SearchFooter.vue';

import { context } from '../../../context';

const { useDesign } = context;
const { prefixCls } = useDesign('search-modal');

defineProps({
  visible: {
    type: Boolean,
    default: false,
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

<template>
  <Teleport to="body">
    <Transition mode="out-in">
      <div @click.stop v-if="visible">
        <div :class="`${prefixCls}-search-modal`">
          <t-input 
            placeholder="Search something..."
            clearable
          />
          <div>
            
          </div>
          <ul>
            <li></li>
          </ul>
          <SearchFooter />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="less">
.kreutzer-search-modal {
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
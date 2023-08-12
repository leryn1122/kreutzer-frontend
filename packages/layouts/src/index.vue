<script lang="ts" setup>
import { computed, defineComponent } from 'vue';
import { MenuType, getMenuType } from './menu';
import topMenuMixed from './layout/top-menu-mixed.vue';

const lockEvents = true;

const layout = computed<ReturnType<typeof defineComponent>>(() => {
  let menuType = getMenuType();
  switch (menuType) {
    case MenuType.TOP_MENU_MIXED:
      return topMenuMixed;
    case MenuType.SIDEBAR:
      return undefined;
    default:
      throw new Error('Uncearchable');
  }
})
</script>

<template>
  <component :is="layout" v-bind="layout">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}" />
    </template>
  </component>
</template>
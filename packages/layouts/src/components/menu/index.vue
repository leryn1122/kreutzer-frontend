<script lang="ts" setup>
import { Ref, onMounted, ref } from 'vue';

import { context } from '../../context';

import { Menu } from '@kreutzer/types';

const props = defineProps({
  mode: {
    type: String,
    default: () => 'vertical',
  }
})

const {
  getMenus
} = context;

const menu = ref(null);
const menuList: Ref<Menu[]> = ref([]);

onMounted(async () => {
  menuList.value = await getMenus();
  menuList.value = [
    {
      name: 'Dashboard',
      key: 'dashboard',
      icon: 'dashboard',
      path: '',
    },
    {
      name: 'Resources',
      key: 'resource',
      icon: 'server',
      path: '',
    },
    {
      name: 'Root List',
      key: 'root',
      icon: 'root-list',
      path: '',
    },
    {
      name: 'Deployment Platform',
      key: 'control-platform',
      icon: 'control-platform',
      path: '',
    },
    {
      name: 'Precise Monitor',
      key: 'precise-monitor',
      icon: 'precise-monitor',
      path: '',
    },
    {
      name: 'Mail',
      key: 'mail',
      icon: 'mail',
      path: '',
    },
    {
      name: 'User Center',
      key: 'user-center',
      icon: 'user-circle',
      path: '',
    },
    {
      name: 'Play',
      key: 'play-circle',
      icon: 'play-circle',
      path: '',
    },
  ];
})

const onChangeMenu = (active) => {
  console.log('change', active);
}

const collapsed = ref(true);
const collapsedButtonIcon = ref('chevron-right-double');

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
  collapsedButtonIcon.value = !collapsed.value
    ? 'chevron-left-double'
    : 'chevron-right-double';
}

</script>

<template>
  <t-menu @change="onChangeMenu" :collapsed="collapsed">
    <t-menu-item v-for="(menu, index) in menuList" :value="menu.key">
      <template #icon v-if="menu.icon">
        <t-icon :name="menu.icon" />
      </template>
      {{ menu.name }}
    </t-menu-item>
    <template #operations>
      <t-button class="t-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
        <template #icon>
          <t-icon :name="collapsedButtonIcon" />
        </template>
      </t-button>
    </template>
  </t-menu>
</template>
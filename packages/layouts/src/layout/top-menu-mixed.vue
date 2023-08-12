<template>
  <t-layout>
    <t-header>
      <slot name="header">
        <LayoutHeader />
      </slot>
    </t-header>
    <t-layout>
      <t-aside class="aside">
        <slot name="aside">
          <LayoutAside />
        </slot>
      </t-aside>
      <t-content>
        <slot name="main">
          <LayoutMainContainer />
        </slot>
      </t-content>
      <t-footer class="footer">
        <slot name="footer">
          <LayoutFooter />
        </slot>
      </t-footer>
    </t-layout>
  </t-layout>
</template>

<script lang="ts" setup>
import LayoutHeader from '../components/header.vue';
import LayoutAside from '../components/aside.vue';
import LayoutFooter from '../components/footer.vue';
import LayoutMainContainer from '../components/container.vue';
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;

  background-color: var(--td-gray-color-2);
}

.aside {
  min-width: 32px;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
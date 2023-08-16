<template>
  <t-space direction="vertical">
    <t-space direction="horizontal" justify="space-between" align="center">
      <slot name="logo">
        <t-space :size="0" align="center">
          <div>Logo</div>
          <slot name="breadcrumb">
            <t-breadcrumb :max-item-width="'150'">
              <t-breadcrumbItem to="/vue-next/components/menu">页面1</t-breadcrumbItem>
              <t-breadcrumbItem :max-width="'80'">页面2面包屑文案超长时悬浮显示文案全部信息</t-breadcrumbItem>
            </t-breadcrumb>
          </slot>
        </t-space>
      </slot>
      <slot name="menu"></slot>
      <div class="pl-8px pr-8px">
        <slot name="buttons">
          <t-space size="medium" align="center" class="space-border">
            <Search />
            <Nofication />
            <User />
            <Settings />
          </t-space>
        </slot>
      </div>
    </t-space>
  </t-space>
</template>

<script lang="ts">
export default { name: 'LayoutFooter' }
</script>

<script lang = "ts" setup >
import Nofication from '../components/notification/index.vue';
import Search from '../components/search/Search.vue';
import Settings from '../components/settings/index.vue';
import User from '../components/users/index.vue';
</script>

<style lang="less">
.space-border {
  padding: 12;
}

.space-block {
  height: 60px;
  width: 60px;
}
</style>
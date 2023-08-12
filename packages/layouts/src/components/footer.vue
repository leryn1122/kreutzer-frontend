<template>
  <div>
    Copyright @ 2020-{{ new Date().getFullYear() }} Leryn. All Rights Reserved
  </div>
</template>

<script lang="ts">
export default { name: 'LayoutFooter' }
</script>

<script lang="ts" setup>
const props = defineProps({
  height: {
    type: String,
    default: null,
  }
})

</script>

<style lang="less">
.footer {
  --footer-padding: 0 20px;
  --footer-height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;

  display: block;
  zoom: 1;
  margin: 0;
  line-height: 40px;
  background-color: 0 0 0, 50%;
}
</style>
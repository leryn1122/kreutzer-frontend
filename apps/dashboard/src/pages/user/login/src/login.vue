<script lang="ts" setup>
import { userLogin as userLogin_ } from '@/apis/user';

function userLogin() {
  userLogin_({
    username: 'admin',
    password: '123',
  })
}

</script>

<template>
  <div>
    <t-button @click="userLogin">
      Login
    </t-button>
  </div>
</template>

<style lang="less">
@import url('@/styles/index.less');
</style>
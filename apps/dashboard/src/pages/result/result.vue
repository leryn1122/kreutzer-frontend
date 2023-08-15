<script lang="ts" setup name="Result">
import { PropType } from 'vue';
import { HomeIcon, RollbackIcon } from 'tdesign-icons-vue-next';

import Router from '@/router';

enum ExceptionEnum {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

defineProps({
  status: {
    type: Number as PropType<number>,
    default: ExceptionEnum.NOT_FOUND,
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
})

function goBackHome(): void {
  Router.push({ name: 'homepage' });
}

function goBackPage(): void {
  Router.go(-1);
}

</script>

<template>
  <div class="result-container">
    <img src="https://oss.leryn.top/web/img/ow/ana.jpg" class="result-img" />
    <div class="result-content">
      <div class="result-title">{{ title }}</div>
      <div class="result-desc">{{ description }}</div>
      <slot>
        <div class="result-action" theme="primary">
          <t-button :block="true" @click="goBackHome()">
            <template #icon><home-icon /></template>
            Back to Homepage
          </t-button>
          <t-button :block="true" @click="goBackPage()" style="margin-top: 4px" theme="primary">
            <template #icon><rollback-icon /></template>
            Back to Last Page
          </t-button>
        </div>
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.result {
  &-link {
    // color: var(--td-brand-color);
    text-decoration: none;
    cursor: pointer;

    // &:hover {
    //   color: var(--td-brand-color);
    // }

    // &:active {
    //   // color: var(--td-brand-color);
    // }

    // &--active {
    //   // color: var(--td-brand-color);
    // }

    &:focus {
      text-decoration: none;
    }
  }

  &-container {
    // min-height: 500px;
    // height: 80%;
    // align-items: center;
    // align-content: center;
    // text-align: center;
    // margin-top: 150px;

    min-height: 400px;
    height: 75vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;

    display: inline-block;
    flex: auto;
  }

  &-img {
    height: 360px;
    max-width: 430px;
    display: inline-block;
    padding-right: 52px;
    zoom: 1;
  }

  &-title {
    font-style: normal;
    font-weight: 500;
    margin-top: 8px;

    color: var(--td-text-color-primary);
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
    margin-bottom: 24px;
    // color: var(--td-text-color-primary);
    // font-size: @font-size-xl;
    // line-height: @line-height-xl;
  }

  &-desc {
    margin: 8px 0 32px;
    // font-size: @font-size-base;
    // color: var(--td-text-color-secondary);
    // line-height: @line-height-base;
    color: rgba(0, 0, 0, 0.45);
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  &-action {
    width: 200px;
    margin: 0 140px 0 140px;
    align-content: center;
  }
}
</style>
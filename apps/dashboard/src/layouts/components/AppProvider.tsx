import { defineComponent } from "vue";

const props = {

};

export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    return () => slots.default?.()
  },
})
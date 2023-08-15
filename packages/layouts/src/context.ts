import { VNode } from 'vue';

type AnyFunction<T> = (...args: any[]) => T;

export interface ContextOptions {
  getMenus: () => Promise<any>;
  Logo: VNode | null;
}

export interface ContextOptions {}

export let context: ContextOptions = {
  getMenus: async () => ({}),
  Logo: null,
};

export const useContext = async (func: AnyFunction<any>) => {
  context = func();
};

import { VNode } from 'vue';

type AnyFunction<T> = (...args: any[]) => T;

export interface ContextOptions {
  useDesign: (scope: string) => any;
  useUserStore: () => Promise<any>,
  getMenus: () => Promise<any>;
  Logo: VNode | null;
}

export interface ContextOptions {}

export let context: ContextOptions = {
  useDesign: (_) => {},
  useUserStore: async () => ({}),
  getMenus: async () => ({}),
  Logo: null,
};

export const useContext = async (func: AnyFunction<any>) => {
  context = func();
};

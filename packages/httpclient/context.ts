import { AnyFunction } from '@kreutzer/types';

export interface ContextOptions {
  apiUrl?: string;
}

export let context: ContextOptions = {
  apiUrl: '',
};

export const useContext = async (func: AnyFunction<any>) => {
  context = func();
};

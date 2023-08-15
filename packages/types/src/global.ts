export {}

declare global {
  export type AnyFunction<T> = (...args: any[]) => T;
}

export {};

declare global {
  export type AnyFunction<T> = (...args: any[]) => T;
    
  export type Nullable<T> = T | null;
}

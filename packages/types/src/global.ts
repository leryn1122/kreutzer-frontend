declare global {
  type AnyFunction<T> = (...args: any[]) => T;
}

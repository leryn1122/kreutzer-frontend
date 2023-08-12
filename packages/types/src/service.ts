export interface HttpResult<T = any> {
  code: Number;
  message?: string;
  data: T;
  type: 'collection' | 'object';
}

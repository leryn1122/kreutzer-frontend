export interface HttpResult<T = any> {
  code: number;
  message?: string;
  data?: T;
  type: 'collection' | 'object' | 'string';
}

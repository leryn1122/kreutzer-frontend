export declare interface ViteEnv {
  VITE_BASE_URL: string;
  VITE_GLOB_APP_TITLE: string;
  VITE_PUBLIC_PATH: string;
  VITE_PORT?: number;
  VITE_USE_MOCK?: boolean;
  VITE_PROXY?: [string, string][];
  VITE_BUILD_COMPRESS?: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE?: boolean;
}

export declare type Recordable<T = any> = Record<string, T>;
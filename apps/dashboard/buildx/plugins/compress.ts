import type { Plugin } from 'vite';
import type { ViteEnv } from '@kreutzer/types';

import compressPlugin from 'vite-plugin-compression';

export default function useAutoImportPlugins(viteEnv: ViteEnv, isBuild: boolean): Plugin | Plugin[] {
  if (viteEnv.VITE_BUILD_COMPRESS || viteEnv.VITE_BUILD_COMPRESS == 'none') {
    return [] as Plugin[];
  }

  if (viteEnv.VITE_BUILD_COMPRESS == 'gzip') {
    return compressPlugin({
      ext: '.gz',
      algorithm: 'gzip',
      threshold: 1024 * 100,
      deleteOriginFile: viteEnv.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    });
  }

  if (viteEnv.VITE_BUILD_COMPRESS == 'brotli') {
    return compressPlugin({
      ext: '.br',
      algorithm: 'brotliCompress',
      threshold: 1024 * 100,
      deleteOriginFile: viteEnv.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    });
  }

  return [] as Plugin[];
}

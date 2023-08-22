import type { Plugin } from 'vite';
import { ViteEnv } from '@kreutzer/types';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

export default function useAutoImportPlugins(viteEnv: ViteEnv, isBuild: boolean): Plugin | Plugin[] {
  return [
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
  ] as Plugin[];
}

import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import createVuePlugin from '@vitejs/plugin-vue';

import type { ViteEnv } from '@kreutzer/types';
import useAutoImportPlugins from './autoImport';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean): (Plugin | Plugin[])[] {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // createVuePlugin(),
    vue(),
    svgLoader(),
  ];

  // // vite-plugin-html
  // vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // // vite-plugin-mock
  // vitePlugins.push(configMockPlugin(viteEnv, isBuild));

  // // vite-plugin-style-import
  // vitePlugins.push(configStyleImportPlugin(viteEnv, isBuild));

  // // vite-plugin-theme
  // vitePlugins.push(configThemePlugin(isBuild));

  // auto-imports
  vitePlugins.push(useAutoImportPlugins(viteEnv, isBuild));

  if (isBuild) {
    // vite-plugin-compression
    // vitePlugins.push(useCompressionPlugin(viteEnv, isBuild));
  }

  return vitePlugins;
}

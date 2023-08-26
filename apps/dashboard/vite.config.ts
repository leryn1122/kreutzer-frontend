import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import path from 'path';

import packageJson from './package.json';
import { createProxy, createVitePlugins, renderAssetFileNames, renderChunkFileNames, wrapperEnv } from './buildx';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { name, version } = packageJson;
  const __APP_INFO__ = {
    package: {
      name,
      version,
    },
    // lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  };
  const CWD = process.cwd();
  const env = loadEnv(mode, CWD);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  const { VITE_BASE_URL, VITE_PORT, VITE_PROXY } = viteEnv;

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
        },
      },
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          compact: true,
          entryFileNames(chunkInfo) {
            return chunkInfo.name ? `${chunkInfo.name.toLocaleLowerCase()}.js` : '';
          },
          chunkFileNames: renderChunkFileNames,
          assetFileNames: renderAssetFileNames,
        },
      },
    },

    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },

    plugins: createVitePlugins(viteEnv, isBuild),

    css: {
      modules: false,
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // modifyVars: {
          //   '@prefix': 'kreutzer',
          // },
          additionalData: `@import url('@/styles/index.less');`,
        },
      },
    },

    server: {
      host: true,
      port: VITE_PORT,
      cors: true,
      proxy: createProxy(VITE_PROXY),
      open: false,
    },
  };
};

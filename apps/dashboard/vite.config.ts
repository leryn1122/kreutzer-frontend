import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import package_ from './package.json';
import { wrapperEnv } from './src/build/buildEnv';
import { createProxy } from './src/build/proxy';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { name, version, dependencies } = package_;
  const __APP_INFO__ = {
    package: {
      name,
      version,
      dependencies,
    },
    // lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  };
  const CWD = process.cwd();
  const isBuild = 'build' === command;

  const env = loadEnv(mode, CWD);
  const viteEnv = wrapperEnv(env);
  const { VITE_BASE_URL, VITE_PORT, VITE_PROXY } = viteEnv;

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [vue()],

    css: {
      modules: false,
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
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

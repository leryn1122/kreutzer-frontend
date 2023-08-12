import { ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

import package_ from './package.json';

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

  return {
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
      port: 5173,
      cors: true,
      open: false,
    },
  };
};

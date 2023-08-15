import { createApp } from 'vue';

import App from './App.vue';
import TDesign from 'tdesign-vue-next';

import { initApplication } from './init-application';
import { prepareRoutes, setupRouter } from '@/router';
import { setupPinia } from '@/store';

const main = async () => {
  const app = createApp(App);

  if (import.meta.env.DEV) {
    import('tdesign-vue-next/dist/tdesign.css');
    app.use(TDesign);
  }

  setupPinia(app);

  await initApplication();

  prepareRoutes();
  setupRouter(app);

  app.mount('#app');
};

main();

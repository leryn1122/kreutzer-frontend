import { createApp } from 'vue';

import App from './App.vue';
import TDesign from 'tdesign-vue-next';

import { initApplication } from './init-application';
import { prepareRoutes, setupRouter } from '@/router';
import { setupPinia } from '@/store';
import '@/styles/index.less';


const main = async () => {
  if (import.meta.env.SSR) {
    let script: HTMLScriptElement = document.createElement('script');
    script.src = '/src/entry-client.js';
    script.type = 'module';
    document.body.appendChild(script);

    let outlet: Comment = document.createComment('ssr-outlet');
    document.getElementById('app')?.appendChild(outlet);
  }

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

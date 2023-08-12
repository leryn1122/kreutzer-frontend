import { createPinia } from 'pinia';
import { createApp } from 'vue';

const store = createPinia();

export function setupPinia(app: ReturnType<typeof createApp>): ReturnType<typeof createApp> {
  app.use(store);
  return app;
}

export { store };

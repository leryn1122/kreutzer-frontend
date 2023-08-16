import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import { persistGlobalConfig } from './persist';
import { createStorageName } from './utils';

const pinia = createPinia();

pinia.use(createPersistedState(persistGlobalConfig(createStorageName(import.meta.env))));

export function setupPinia(app: ReturnType<typeof createApp>) {
  app.use(pinia);
}

export * from 'pinia';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import { setupNavigationGuardChain } from './guard';

export let router: Router;

export function initRouter(path: string, routes: Array<RouteRecordRaw>): Router {
  router = createRouter({
    history: createWebHashHistory(path),
    routes: routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0, el: '#app', behavior: 'smooth' }),
  });
  return router;
}

export function setupRouter(app: ReturnType<typeof createApp>): ReturnType<typeof createApp> {
  setupNavigationGuardChain().register(router);

  app.use(router);
  return app;
}

export * from './menu';
export * from './mitt';
export * from './routes';

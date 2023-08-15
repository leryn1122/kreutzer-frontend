import { RouteRecordRaw, Router } from 'vue-router';
import { initRouter, mapModuleRouterList } from '@kreutzer/router';

export * from '@kreutzer/router';

// 导入homepage相关固定路由
const homepageModules = import.meta.glob('./modules/**/homepage.ts', { eager: true });

// 导入modules非homepage相关固定路由
const fixedModules = import.meta.glob('./modules/**/!(homepage).ts', { eager: true });

// 其他固定路由
const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    // component: () => import('@/pages/Login/index.vue'),
    component: () => undefined,
  },
];

// 存放固定路由
export const homepageRouterList: Array<RouteRecordRaw> = mapModuleRouterList(homepageModules);
export const fixedRouterList: Array<RouteRecordRaw> = mapModuleRouterList(fixedModules);

export const allRoutes = [...homepageRouterList, ...fixedRouterList, ...defaultRouterList];

export function registerApplicationRoutes(router: Router) {
  allRoutes.forEach((r) => {
    router.addRoute(r.name!, r);
  });
}

let router = initRouter(import.meta.env.VITE_PUBLIC_PATH, allRoutes);

export function prepareRoutes(): Router {
  return router;
}

export default router;

export async function getMenus() {
  return [
    {
      name: 'Dashboard',
      key: 'dashboard',
      icon: 'dashboard',
      path: '',
    },
    {
      name: 'Resources',
      key: 'resource',
      icon: 'server',
      path: '',
    },
    {
      name: 'Root List',
      key: 'root',
      icon: 'root-list',
      path: '',
    },
    {
      name: 'Deployment Platform',
      key: 'control-platform',
      icon: 'control-platform',
      path: '',
    },
    {
      name: 'Precise Monitor',
      key: 'precise-monitor',
      icon: 'precise-monitor',
      path: '',
    },
    {
      name: 'Mail',
      key: 'mail',
      icon: 'mail',
      path: '',
    },
    {
      name: 'User Center',
      key: 'user-center',
      icon: 'user-circle',
      path: '',
    },
    {
      name: 'Play',
      key: 'play-circle',
      icon: 'play-circle',
      path: '',
    },
  ];
}

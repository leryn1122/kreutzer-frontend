export default [
  {
    path: '/403',
    name: 'Result403',
    component: () => import('@/pages/result/403.vue'),
    meta: { title: '无权限' },
  },
  {
    path: '/404',
    name: 'Result404',
    component: () => import('@/pages/result/404.vue'),
    meta: { title: '访问页面不存在页' },
  },
  {
    path: '/500',
    name: 'Result500',
    component: () => import('@/pages/result/500.vue'),
    meta: { title: '服务器出错页' },
  },
  {
    path: '/network-error',
    name: 'ResultNetworkError',
    component: () => import('@/pages/result/network-error.vue'),
    meta: { title: '网络异常' },
  },
  {
    path: '/browser-incompatible',
    name: 'ResultBrowserIncompatible',
    component: () => import('@/pages/result/browser-incompatible.vue'),
    meta: { title: '浏览器不兼容页' },
  },
  {
    path: '/maintenance',
    name: 'ResultMaintenance',
    component: () => import('@/pages/result/maintenance.vue'),
    meta: { title: '系统维护页' },
  },
];

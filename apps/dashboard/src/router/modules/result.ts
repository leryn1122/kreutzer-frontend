export default [
  {
    path: '/403',
    name: 'Result403',
    component: () => import('@/pages/result/403.vue'),
    meta: { title: '403 - Unauthorized' },
  },
  {
    path: '/404',
    name: 'Result404',
    component: () => import('@/pages/result/404.vue'),
    meta: { title: '404 - Not Found' },
  },
  {
    path: '/500',
    name: 'Result500',
    component: () => import('@/pages/result/500.vue'),
    meta: { title: '500 - Internal Server Error' },
  },
  {
    path: '/network-error',
    name: 'ResultNetworkError',
    component: () => import('@/pages/result/network-error.vue'),
    meta: { title: 'Network error' },
  },
  {
    path: '/browser-incompatible',
    name: 'ResultBrowserIncompatible',
    component: () => import('@/pages/result/browser-incompatible.vue'),
    meta: { title: 'Browser incompatible' },
  },
  {
    path: '/maintenance',
    name: 'ResultMaintenance',
    component: () => import('@/pages/result/maintenance.vue'),
    meta: { title: 'In maintenance' },
  },
];

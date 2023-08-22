export default [
  {
    path: '/appstore',
    component: () => import('@/pages/publish/appstore'),
    name: 'appstore',
    meta: {
      title: 'App Stores',
    },
  },
  {
    path: '/apps',
    component: () => import('@/pages/result/empty.vue'),
    name: 'apps',
    meta: {
      title: 'Apps',
    },
  },
  {
    path: '/shell',
    component: () => import('@/pages/publish/shell'),
    name: 'shell',
    meta: {
      title: 'Shell',
    },
  },
];

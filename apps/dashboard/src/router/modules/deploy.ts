export default [
  {
    path: '/publish/appstore',
    component: () => import('@/pages/deploy/appstore.vue'),
    name: 'appstore',
    meta: {
      title: '主页',
      orderNo: 0,
    },
  },
];
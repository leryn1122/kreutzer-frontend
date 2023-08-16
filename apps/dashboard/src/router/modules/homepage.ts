export default [
  {
    path: '/',
    component: () => import('@/pages/result/empty.vue'),
    name: 'homepage',
    meta: {
      title: 'Homepage',
      orderNo: 0,
    },
  },
];

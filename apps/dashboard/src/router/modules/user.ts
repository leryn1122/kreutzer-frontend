export default [
  {
    path: '/login',
    component: () => import('@/pages/user/login'),
    name: 'login',
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/loginRedirect',
    name: 'loginRedirect',
    redirect: '/login',
    meta: {
      title: 'Redirect to login',
    },
  },
];

/**
 * 梁总专用路由
 */

export default [
  {
    name: '首页',
    path: '/home',
    component: () => import('@/pages/home'),
  },
  {
    name: '我的',
    path: '/user',
    component: () => import('@/pages/user'),
  },
];

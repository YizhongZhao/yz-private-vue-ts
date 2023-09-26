import { RouteRecordRaw } from 'vue-router';
import homeRoute from './routes/home';
const globalRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      hidden: true,
      title: '登录重定向',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
      title: '登录',
    },
  },
  {
    path: '/workbench',
    name: 'workbench',
    component: () => import('@/views/workbench/index.vue'),
    meta: {
      hidden: false,
      title: '工作台',
      icon: 'workbench',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      hidden: false,
      title: '仪表盘',
      icon: 'dashboard',
    },
  },
  homeRoute,
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true,
      title: '404',
    },
  },
];

export { globalRoutes };

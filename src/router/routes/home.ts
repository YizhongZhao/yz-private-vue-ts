import { RouteRecordRaw } from 'vue-router';

const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    hidden: false,
    title: '首页',
    icon: 'home',
  },
  children: [
    {
      path: 'dashboard',
      name: 'home-dashboard',
      component: () => import('@/views/home/dashboard/index.vue'),
      meta: {
        hidden: true,
        title: '仪表盘',
      },
    },
    {
      path: 'workbench',
      name: 'home-workbench',
      component: () => import('@/views/home/workbench/index.vue'),
      meta: {
        hidden: true,
        title: '工作台',
      },
    },
  ],
};

export default homeRoute;

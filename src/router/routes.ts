import type { RouteRecordRaw } from 'vue-router'
/**
 * 页面路由配置信息
 */
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('~/views/home/index.vue'),
  },
] as RouteRecordRaw[]

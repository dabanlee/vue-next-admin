import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const context = require.context('./modules', true, /\.ts$/)

export const modulesRoutes = context.keys().reduce((prev: any[], path: string) => {
  prev = prev.concat(context(path).default)
  return prev
}, [])

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
  },
]

const routes: Array<RouteRecordRaw> = [
  ...constantRoutes,
  ...modulesRoutes,
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      ...modulesRoutes,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

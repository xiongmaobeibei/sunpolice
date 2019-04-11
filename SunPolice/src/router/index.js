import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: 'log',
    component: () => import('../pages/log/log')
  },
  {
    path: '/login',
    component: () => import('../pages/log/login')
  },
  {
    path: '/regist',
    component: () => import('../pages/log/regist')
  },
  {
    path: '/updateCode',
    component: () => import('../pages/log/updateCode')
  },
  {
    path: '/master',
    component: () => import('../pages/users/master/master')
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router

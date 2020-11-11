import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/form'
    },
  {
    path: '/form',
    name: 'Index',
    component: () => import('../views/Index')
  },
    {
      path: '/success',
      name: 'Success',
      component: () => import('../views/Success')
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

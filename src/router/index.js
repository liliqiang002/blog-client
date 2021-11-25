import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article/add',
    name: 'articleAdd',
    component: () => import('../views/Article/Add.vue'),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/article/detail',
    name: 'articleDetail',
    component: () => import('../views/Article/Detail.vue')
  },
  {
    path: '/resources/index',
    name: 'Resources',
    component: () => import('../views/Resources/index.vue')
  },
  {
    path: '/disscuss/index',
    name: 'Disscuss',
    component: () => import('../views/Disscuss/index.vue')
  },
  {
    path: '/study/index',
    name: 'Study',
    component: () => import('../views/Study/index.vue')
  },
  {
    path: '/trends/index',
    name: 'Trends',
    component: () => import('../views/Study/index.vue')
  },
  {
    path: '/daily/index',
    name: 'Daily',
    component: () => import('../views/Daily/index.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  if (to.meta.needLogin) {
    store.dispatch('checkLogin')
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/DemoPage.vue'),
      // children: [
      //   {
      //     path: 'demo1',
      //     name: 'demo1',
      //     component: () => import('../views/DemoPage.vue')
      //   }
      // ]
    },
    // {
    //   path: '/',
    //   redirect: '/demo'
    //   // component: () => import('../views/AboutView.vue')
    // },
  ]
})
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  next()
})
export default router

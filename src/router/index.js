import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Index.vue'),
      meta: {
        layouts: 'landing'
      },
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses.vue'),
      meta: {
        layouts: 'site'
      },
    },
    {
      path: '/mentors',
      name: 'mentors',
      component: () => import('../views/Mentors.vue'),
      meta: {
        layouts: 'site'
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/Faq.vue'),
      meta: {
        layouts: 'site'
      },
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/Events.vue'),
      meta: {
        layouts: 'site'
      },
    },
    {
      path: '/Login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        layouts: 'login'
      },
    },
    {
      path: '/Registration',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
      meta: {
        layouts: 'login'
      },
    },
  ]
})

export default router

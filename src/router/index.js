import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentInstance } from 'vue';

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
      path: '/course/:id',
      name: 'course',
      component: () => import('../views/Course.vue'),
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
      path: '/mentor/:mentor_name',
      name: 'mentor',
      component: () => import('../views/Mentor.vue'),
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
      path: '/event/:url',
      name: 'event',
      component: () => import('../views/Event.vue'),
      meta: {
        layouts: 'site'
      },
    },
    {
      path: '/user/profile',
      name: 'user-profile',
      component: () => import('../views/UserProfile.vue'),
      meta: {
        layouts: 'user',
        header: true,
        profile: true,
      },
    },
    {
      path: '/user/sessions',
      name: 'user-mentor',
      component: () => import('../views/UserSessions.vue'),
      meta: {
        layouts: 'user',
        header: true,
        profile: true,
      },
    },
    {
      path: '/user/profile-edite',
      name: 'user-profile-edite',
      component: () => import('../views/UserProfileEdite.vue'),
      meta: {
        layouts: 'user'
      },
    },
    {
      path: '/user/courses',
      name: 'user-profile-courses',
      component: () => import('../views/UserProfile.vue'),
      meta: {
        layouts: 'user'
      },
    },
    {
      path: '/user/meeting/:id',
      name: 'user-profile-meeting',
      component: () => import('../views/UserMeeting.vue'),
      meta: {
        layouts: 'user'
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

// router.beforeEach((to, from) => {
//   const instance = getCurrentInstance();
//   console.log(instance.appContext.config.globalProperties.$trigger);
//   if (instance && instance.appContext.config.globalProperties.$trigger) {
    
//     instance.appContext.config.globalProperties.$trigger.refresh();
//     instance.appContext.config.globalProperties.$smoother.refresh();
//   }
// })

export default router

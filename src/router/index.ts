import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../pages/Blog.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/Contact.vue'),
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../pages/Features.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../pages/Pricing.vue'),
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('../pages/Updates.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../pages/PrivacyPolicy.vue'),
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../pages/TermsOfService.vue'),
    },
    {
      path: '/secretRoute',
      name: 'secret-route',
      component: () => import('../pages/SecretRoute.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import CaseStudyDetail from '../components/CaseStudyDetail.vue';
import Login from '../components/Login.vue';
import ContactFormDashboard from '../components/ContactFormDashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App.vue')
    },
    {
      path: '/case-study/:id',
      name: 'case-study',
      component: CaseStudyDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contact-form-dashboard',
      name: 'dashboard',
      component: ContactFormDashboard,
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');
        if (!token) {
          next('/login');
        } else {
          next();
        }
      }
    }
  ]
});

export default router;
import { createRouter, createWebHistory } from 'vue-router'
import CaseStudyDetail from '../components/CaseStudyDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/case-study/:id',
      name: 'case-study',
      component: CaseStudyDetail
    }
  ]
})

export default router
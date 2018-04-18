import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'Main',
      component: Main
    },
    {
      path: '/commercials',
      name: 'Main',
      component: Main
    },
    {
      path: '/music',
      name: 'Main',
      component: Main
    },
    {
      path: '/reviews',
      name: 'Main',
      component: Main
    }
  ]
})

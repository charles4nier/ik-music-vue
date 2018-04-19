import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import IframeComp from '@/components/IframeComp'

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
      component: Main,
      children: [
        {
          path: ':title',
          name: 'IframeComp',
          component: IframeComp
        }
      ]
    },
    {
      path: '/music',
      name: 'Main',
      component: Main,
      children: [
        {
          path: ':title',
          name: 'IframeComp',
          component: IframeComp
        }
      ]
    },
    {
      path: '/reviews',
      name: 'Main',
      component: Main
    }
  ]
})

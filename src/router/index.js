import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import User from '@/components/user/index'
import Ordinary from '@/components/user/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: {name: 'ordinary'},
      children: [
        {
          path: 'user',
          component: User,
          children: [
            {
              path: 'ordinary',
              name: 'ordinary',
              component: Ordinary
            }
          ]
        }
      ]
    }
  ]
})

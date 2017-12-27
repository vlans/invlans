import Vue from 'vue'
import Router from 'vue-router'
import invlans from '@/components/invlans'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'invlans',
      component: invlans
    }
  ]
})

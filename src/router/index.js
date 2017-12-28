import Vue from 'vue'
import Router from 'vue-router'
import invlans from '@/components/invlans'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'invlans',
      component: invlans
    },
    { path: '/user',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    },
    {
      path: '/other',
      components: {
        default: Baz,
        a: Bar,
        b: Foo
      }
    }
  ]
})

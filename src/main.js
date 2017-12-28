// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'

// iview
// import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 然后这样按需引入组件，就可以减小体积了：
// import { Button, Table } from 'iview';
// Vue.component('Button', Button);
// Vue.component('Table', Table);


// Vue.use(VueRouter);
Vue.use(iView);

// The routing configuration
// const RouterConfig = {
//   routes: Routers
// };
// const routers = new VueRouter(RouterConfig);

Vue.config.productionTip = false

Vue.use(iView)

Vue.prototype.$api = axios.create(
  {
    baseURL: 'http://www.invlans.com/api/'
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // router: routers,
  // render: h => h(App),
  template: '<App/>',
  components: { App }
})

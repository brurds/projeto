// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import VueRouter from 'vue-router';
import {routes} from './router/routes'
Vue.use(VueRouter);
const router = new VueRouter({ 
  routes,
  mode:'history'
 });

import 'primeflex/primeflex.css' 
import 'primevue/resources/themes/nova-light/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //shared css
import 'primeicons/primeicons.css'                           //icons 


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

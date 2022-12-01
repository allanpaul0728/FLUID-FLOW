import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import PlumbingNetwork from './components/PlumbingNetwork'
import MatrixFlowRates from './components/MatrixFlowRates'

Vue.config.productionTip = false

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "illustation",
    component: PlumbingNetwork
  },
  {
    path: "/matrix",
    name: "matrixflowrates",
    component: MatrixFlowRates
  }
]

const router = new Router({
  mode: "history",
  routes
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible'
import VueRouter from 'vue-router'
import log from './pages/log/log'
import login from './pages/log/login'
import regist from './pages/log/regist'
import updateCode from './pages/log/updateCode'
import VueResource from 'vue-resource'
import personality from './pages/users/master/personality'
import systemManage from './pages/users/master/systemManage'
import userManage from './pages/users/master/userManage'
import master from './pages/users/master/master'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    component: log,
    children: [
      {path: '/login', component: login},
      {path: '/regist', component: regist},
      {path: '/updateCode', component: updateCode}
    ]
  },
  {
    path: '/master',
    component: master,
    children: [
      {path: '/personality', component: personality},
      {path: '/systemManage', component: systemManage},
      {path: '/userManage', component: userManage}
    ]
  }
  // {path: '/personality', component: personality},
  // {path: '/systemManage', component: systemManage},
  // {path: '/userManage', component: userManage},
  // {path: '/master', component: master}
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

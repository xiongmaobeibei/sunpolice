// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import log from './pages/log/log'
// import login from './pages/log/login'
// import regist from './pages/log/regist'
// import updateCode from './pages/log/updateCode'
import VueResource from 'vue-resource'
import router from './router'
import 'lib-flexible'
// import personality from './pages/users/master/personality'
// import systemManage from './pages/users/master/systemManage'
// import userManage from './pages/users/master/userManage'
// import master from './pages/users/master/master'

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

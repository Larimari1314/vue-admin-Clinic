import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import ElementUI from 'https://unpkg.com/element-ui/lib/index.js'
// import 'element-ui/lib/theme-default/index.css'
import './assets/theme/element-#7ac6ff/index.css'

//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
/*import Mock from './mock'

Mock.bootstrap();*/
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'//----------------------------注意这个地方--axios
// import avatar from'common/js/avatar'
// Vue.component("el-avatar",avatar)
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
Vue.prototype.$ajax = axios;//---------------------------注意这个地方--axios
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')


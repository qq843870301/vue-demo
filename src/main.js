import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//axios

//lodash
import _ from 'lodash'

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype._ = _
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
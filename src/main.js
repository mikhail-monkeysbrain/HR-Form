import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import StarRating from 'vue-star-rating'



import router from './routes'
import store from './store'

import './assets/stylus/main.styl'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

Vue.component('v-select', vSelect)
Vue.component('star-rating', StarRating);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

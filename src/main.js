// 导入顶级vue
import Vue from 'vue'
// 导入app.vue
import App from './App.vue'
Vue.config.productionTip = false
// 导入router.js
import router from './router.js'


new Vue({
  el:'#app',
  render: h => h(App),
  router: router
})

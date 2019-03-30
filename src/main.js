// 导入顶级vue
import Vue from 'vue'
// 导入app.vue
import App from './App.vue'
Vue.config.productionTip = false
// 导入全局样式
import './assets/base.scss'
// 导入router.js
import router from './router.js'
// 导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
  el:'#app',
  render: h => h(App),
  router: router
})

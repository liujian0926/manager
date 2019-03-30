// 导入顶级vue
import Vue from 'vue'
// 导入app.vue
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
// 定义路由规则
const routes = [
  
]
// 创建路由对象
const router = new VueRouter({
  routes 
})

new Vue({
  el:'#app',
  render: h => h(App)
})

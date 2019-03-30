//   导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import login from './components/login.vue'
import index from './components/index.vue'

// 定义路由规则
const routes = [
 {path:'/login',component:login},
 {path:'/',component:index}
]
// 创建路由对象
const router = new VueRouter({
    routes: routes
})
// 暴露router
export default router
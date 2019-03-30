//   导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入登陆组件
import login from './components/login.vue'
// 导入首页组件
import index from './components/index.vue'
// 导入用户列表组件
import users from './components/users.vue'

// 定义路由规则
const routes = [
 {path:'/login',component:login},
 {path:'/',component:index,
    children: [{
        path: 'users',
        component: users
    }]
}
 
]
// 创建路由对象
const router = new VueRouter({
    routes: routes
})
// 暴露router
export default router
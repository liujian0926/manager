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
// 导入权限组件
import roles from './components/roles.vue'
// 导入权限列表
import rights from './components/rights.vue'
// 导入商品列表组件
import goods from './components/goods.vue'
// 导入商品分类组件
import categories from './components/categories.vue'
// 导入订单组件
import orders from './components/orders.vue'
// 导入参数组件
import params from './components/params.vue'
// 导入数据报表组件
import reports from './components/reports.vue'
// 定义路由规则
const routes = [{
        path: '/login',
        component: login,
        meta: { noLogin:true }
    },
    {
        path: '/',
        component: index,
        children: [
            { path: 'users',component: users},
            { path: 'roles',component: roles},
            {path: 'rights',component: rights},
            { path: 'goods',component: goods},
            { path: 'categories',component: categories},
            { path: 'orders',component: orders},
            { path: 'params',component: params},
            { path: 'reports',component: reports}
           ]
    }

]
// 创建路由对象
const router = new VueRouter({
    routes: routes
})

// 注册导航守卫
 router.beforeEach((to, from, next) => {
    if(to.meta.noLogin==true){
        // 直接登陆
        next()
    }else{
        if(sessionStorage.getItem('token')){
            next()
        }else{
            Vue.prototype.$message.error('哥们请登录')
            // 跳转到登陆页
            next('/login')
            
        }
    }
     
 })

// 暴露router
export default router
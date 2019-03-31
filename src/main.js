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

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 请求之前同意设置token
  config.headers.Authorization = window.sessionStorage.getItem("token")

  return config;
  
}, function (error) {
 
  return Promise.reject(error);
});


// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 同意设置状态码
  if([200,201,204].indexOf(response.data.meta.status!=-1)){
    Vue.prototype.$message.success(response.data.meta.msg)
  }else{
    Vue.prototype.$message.warning(response.data.meta.msg)
  }

  
  
  return response;
}, function (error) {
  
  return Promise.reject(error);
});
// 导入axios
import axios from 'axios'
// 创建axios基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 创建全局axios
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
<template>

<el-container class="index-container">
  <!-- 头部 -->
    <el-header class="my-header">
      <el-row>
        <el-col :span="4">
          <img src="../assets/logo.png" alt>
        </el-col>
        <el-col :span="18">
          <h2>后台管理系统</h2>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click='loginout'>退出</el-button>
        </el-col>
      </el-row>
    </el-header>


    <el-container class="my-container">
      <!-- 侧边栏 -->
      <el-aside class="my-aside" width="200px">
        <!-- 使用饿了么ui的 导航菜单实现 -->
        <el-menu router default-active="users" class="el-menu-vertical-demo">
          <el-submenu :index="item.id+''" v-for='item in menusList' >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item index="users" v-for="it in item.children">
              <span class="el-icon-menu"></span> {{it.authName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体区域 -->
      <el-main class="my-main">
        <!-- 出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>

 
</el-container>
</template>

<script>
export default {
    name:'index',
    data () {
      return {
        menusList:[]
      }
    },
    methods: {
      //登出
      loginout(){
        sessionStorage.removeItem('token')
        this.$router.push('/login')
      }
    },

    // 判断登陆状态
    beforeCreate () {
      // 判断有没有sessionStorage
      if(sessionStorage.getItem('token')){

      }else{
        this.$message.error('请登录');
        // 返回登陆页
        this.$router.push('/login')
        
      }
    },
   async created () {
     let res =await this.$axios.get('menus')
     console.log(res);
     this.menusList = res.data.data
     
    }
}
</script>
<style lang="scss">
    .index-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        .my-header{
            height: 60px;
            background-color: #b3c0d1;
            line-height: 60px;
            h2{
                margin: 0;
                padding: 0;
                text-align: center;
            }
            img{
                height: 60px;
            }
        }
        .my-container{
            flex: 1;
            .my-aside{
                background-color: skyblue;
            }
            .my-main{
                background-color: #e9eef3;
                 padding-top: 0;
            }
        }
    }
</style>
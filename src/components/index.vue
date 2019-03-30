<template>

<el-container class="index-container">
    <!-- 头部 -->
  <el-header class="my-header">
    <el-row>
      <el-col :span="4"><img src="../assets/logo.png" alt=""></el-col>
      <el-col :span="18"><h2>后台管理系统</h2></el-col>
      <el-col :span="2"><el-button type="success" plain>退出</el-button></el-col>
   </el-row>
  </el-header>

  <el-container class="my-container">
      <!-- 左侧边栏 -->
      <el-aside width="200px" class="my-aside">
       
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
          <el-submenu index="1">  
              <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
              </template>
              <el-menu-item-group> 
                  <el-menu-item index="1-2"><i class="el-icon-menu"></i>选项2</el-menu-item>
              </el-menu-item-group>
          </el-submenu>        
      </el-menu>
      </el-aside>
    <el-container>
               <!-- 右侧主体 -->
          <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</el-container>

</template>

<script>
export default {
    name:'index'
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
                background-color: red;
            }
            .my-main{
                background-color: green;
            }
        }
    }
</style>
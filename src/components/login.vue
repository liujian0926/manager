<template>
<div class="login">
    <div class="box">
        <el-form  label-width="80px" label-position='top' >
            <el-form-item label="用户名">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item>
           <el-button type="primary" class="login-btn" >登陆</el-button>   
           </el-form-item>
        </el-form>  
    </div>
</div>
</template>

<script>
export default {
    name:'login'
}
</script>
<style lang="scss">
    .login{
        height: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       background-color: #324145;
        .box{
            width: 550px;
            height: 420px;
            background-color: white;
            border-radius: 10px;
            box-sizing: border-box;
            padding: 35px;
           .login-btn{
               width: 100%;
           } 
        }
    }
</style>
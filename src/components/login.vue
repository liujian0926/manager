<template>
<div class="login">
    <div class="box">
        <h2>用户登陆</h2>
        <el-form  label-width="80px" label-position='top' :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item label="用户名" prop='username'>
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
           <el-button type="primary"  @click="submit('loginForm')" >登陆</el-button> 
           <el-button type="success" @click="resetForm('loginForm')">重置</el-button>  
           </el-form-item>
        </el-form>  
    </div>
</div>
</template>

<script>
export default {
    name:'login',
    data () {
        return {
            // 表单数据
            loginForm:{
                username:'',
                password:''
            },
            // 扁担验证规则
            rules:{
                username:[
                    {required:true,message:'请输入用户名',trigger:'blur'},
                    {min:6,message:'长度在6-20个字符',trigger:'blur'}
                    ],
                password:[
                    {required:true,message:'请输入用密码',trigger:'blur'},
                    {min:6,message:'长度在6-20个字符',trigger:'blur'}
                    ]
            }
        } 
    },
    // 方法
    methods: {
        // 登陆验证
         submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 成功
            
          } else {
            // 失败
            this.$message.error('数据格式错误')
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
    
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
            // 怪异盒模型
            box-sizing: border-box;
            padding: 35px;
           .login-btn{
               width: 100%;
           } 
        }
    }
</style>
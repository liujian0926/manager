

<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <my-break sectitle="权限管理" threetitle='角色列表'></my-break>

    <el-row>
      <!-- 按钮 -->
      <el-col :span="6">
        <el-button type="success" plain class="btn-add">添加角色</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="roleList" style="width: 100%" border >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="180" ></el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="180" ></el-table-column>

      <el-table-column label="操作">
        <!-- scope 是一个名字 -->
        <template slot-scope="scope">
          <!-- 我们可以通过scope.$index 获取索引 scope.row获取这一行的数据 -->
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            plain
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            plain
          ></el-button>
          <el-button
            type="warning"
            size="mini"
            icon="el-icon-check"
            plain
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  
 
    

    
  </div>
</template>

<script>

export default {
  name: "roles",
 data() {
   return {
    //  角色列表
     roleList:[
       {name:'张安',age:19}
     ]
   }
 },

 methods: {
   getRoles(){
    this.$axios.get('roles').then(res=>{
      console.log(res);
      if(res.data.meta.status==200){
        this.roleList = res.data.data
         console.log(this.roleList);
      }
    })
      
   
    
   }
   
   
},
//  created() {
//    this.getRoles()
//  },

// // 获取数据渲染页面

 
};
</script>

<style lang="scss">
.users-container {
  background-color: #e9eef3;
}
</style>

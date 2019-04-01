

<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <my-break sectitle="权限管理" threetitle='角色列表'></my-break>

    <el-row>
      <!-- 按钮 -->
      <el-col :span="6">
        <el-button type="success" plain class="btn-add" @click="dialogFormVisible=true">添加角色</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="rolesList" style="width: 100%" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="email" label="劫色描述" width="180"></el-table-column>
     
      </el-table-column>

      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index,scope.row)"
            size="mini"
            plain
          ></el-button>
          <el-button
            @click="deleteUser(scope.row)"
            type="danger"
            icon="el-icon-delete"
            size="mini"
            plain
          ></el-button>
          <el-button @click="role(scope.row)" type="success" icon="el-icon-check" size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
  

    

    
  </div>
</template>

<script>
export default {
  name: "roles",
 data() {
   return {
     rolesList:[{},{}]
   }
 },

 
};
</script>

<style lang="scss">
.users-container {
  background-color: #e9eef3;
}
</style>

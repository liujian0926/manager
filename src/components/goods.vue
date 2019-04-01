

<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <my-break sectitle="商品管理" threetitle='商品列表'></my-break>

    <el-row>
      <!-- 输入框 -->
      <el-col :span="12">
        <el-input placeholder="请输入内容"  class="input-with-select">
          <el-button slot="append" icon="el-icon-search" ></el-button>
        </el-input>
      </el-col>
      <!-- 按钮 -->
      <el-col :span="6">
        <el-button type="success" plain class="btn-add" >添加商品</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="goodsList" style="width: 100%" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="email" label="商品价格(元)" width="180"></el-table-column>
      <el-table-column prop="email" label="商品重量" width="180"></el-table-column>
      <el-table-column prop="email" label="创建时间" width="180"></el-table-column>
     
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
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
   <el-pagination
      :page-sizes="[3,6,9,12]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="pagenum"
      @current-change='currentpage'
    ></el-pagination>


    

    
  </div>
</template>

<script>
export default {
  name: "roles",
 data() {
   return {
     goodsList:[{},{}]
   }
 },

  

  // 获取列表数据
 
};
</script>

<style lang="scss">
.users-container {
  background-color: #e9eef3;
}
</style>

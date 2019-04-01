

<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <my-break sectitle="订单管理" threetitle='订单列表'></my-break>

    

    <!-- 表格 -->
    <el-table :data="odersList" style="width: 100%" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="订单编号" width="180"></el-table-column>
      <el-table-column prop="email" label="订单价格" width="180"></el-table-column>

      <el-table-column prop="email" label="是否付款" width="180">
          <template slot-scope="scope">
          <el-button type="danger" plain size="mini" >未付款</el-button>
          </template>
      </el-table-column>

      <el-table-column prop="email" label="是否发货" width="180"></el-table-column>
      <el-table-column prop="email" label="下单时间" width="180"></el-table-column>
     
      </el-table-column>

      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
            <!-- 编辑 -->
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index,scope.row)"
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
     odersList:[{},{}]
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

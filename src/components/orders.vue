

<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <my-break sectitle="订单管理" threetitle='订单列表'></my-break>

    

    <!-- 表格 -->
    <el-table :data="odersList" style="width: 100%" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="order_number" label="订单编号" width="180"></el-table-column>
      <el-table-column prop="order_price" label="订单价格" width="180"></el-table-column>

      <el-table-column label="是否付款" width="180">
          <template slot-scope="scope">
          <el-button v-if="scope.row.order_pay == 0" type="danger" plain size="mini" >未付款</el-button>
          <el-button v-else type="success" plain size="mini" >已付款</el-button>
          </template>
      </el-table-column>

      <el-table-column prop="is_send" label="是否发货" width="180"></el-table-column>
      <el-table-column prop="create_time" label="下单时间" width="180"></el-table-column>
     
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
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="sizeChange"
      @current-change='currentChange'
    ></el-pagination>


    

    
  </div>
</template>

<script>
export default {
  name: "roles",
 data() {
   return {
    //  订单列表
     odersList:[{},{}],
    //  参数对象
    sendData:{
      // 查询参数
      query:'',
      // 页码
      pagenum:1,
      // 页容量
      pagesize:10,
      // 总数量
      total:0
    }

   }
 },

//  方法
methods: {
  // 获取订单列表
  async getOrders(){
    let res =await this.$axios.get('orders',{
      params:this.sendData
    })
    console.log(res);
    this.odersList = res.data.data.goods
    this.total = res.data.data.total
  },
  // 页码改变
  sizeChange(size){
    this.sendData.pagesize = size
    this.getOrders()
  },
  // 页容量改变
  currentChange(current){
    this.sendData.pagenum = current
    this.getOrders()
  }
},

  

  // 获取列表数据

  created () {
    this.getOrders()
  }
 
};
</script>

<style lang="scss">
.users-container {
  background-color: #e9eef3;
}
</style>

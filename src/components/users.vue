
<template>
  <div class="users-container">
      <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class='my-bread'>
           <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item>用户管理</el-breadcrumb-item>
           <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-row>
        <!-- 输入框 -->
        <el-col :span="12">
        <el-input placeholder="请输入内容"  class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </el-col>
            <!-- 按钮 -->
        <el-col :span="6">
             <el-button type="success" plain class="btn-add">添加用户</el-button>
        </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
   
   
</template>

<script>
export default {
    name:'users',
    data () {
        return {
            tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
        }
    }
}
</script>

<style lang="scss">
    .users-container{
        background-color: #e9eef3;
       .my-bread{
           background-color: #d3dce6;
           height: 50px;
           line-height: 50px;
           padding-left: 20px;
       } 
       .btn-add {
           margin-left: 10px;
       }
    }
</style>

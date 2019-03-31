
<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="my-bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row>
      <!-- 输入框 -->
      <el-col :span="12">
        <el-input placeholder="请输入内容" v-model="sendData.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <!-- 按钮 -->
      <el-col :span="6">
        <el-button type="success" plain class="btn-add">添加用户</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="usersList" style="width: 100%" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="mg_state" label="状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
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
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      // 参数对象
      sendData: {
        pagenum: 1,
        query: "",
        pagesize: 10
      },
      //  用户信息列表
      usersList: [],
      // 数据
      total: 0
    };
  },

  methods: {
    handleEdit(index, row) {},
    // 搜索用户功能
  async search() {
    let res = await this.$axios.get("users", {
     
      params: this.sendData
    });
    console.log(res);
    this.usersList = res.data.data.users;
    this.total = res.data.total;
  },
  },

  
  // 获取列表数据
  created() {
    this.search()
  }

};
</script>

<style lang="scss">
.users-container {
  background-color: #e9eef3;
  .my-bread {
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

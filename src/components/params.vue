

<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <my-break sectitle="商品管理" threetitle="分类参数"></my-break>

    <!-- 提示框 -->
    <el-alert class='my-alert' title="注意: 只允许为第三级分类设置相关参数!" type="warning" show-icon></el-alert>
    <!-- 下拉联级 -->
    <el-row class="my-row">
      <el-col :span="24">
        <span>请选择商品分类:&nbsp;&nbsp;</span>
        <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2"></el-cascader>
      </el-col>
    </el-row>

    <!-- tab栏 -->
    <el-tabs v-model="activeName" >
        <!-- 动态参数 -->
      <el-tab-pane label="动态参数" name="first" >
           <el-button class='my-btn' type="primary" size="mini" disabled>添加动态参数</el-button>
                   <!-- 表格 -->
            <el-table :data="dtList" style="width: 100%" border>
              <el-table-column type="index"></el-table-column>
              <el-table-column prop="username" label="商品参数" width="180"></el-table-column>
              <el-table-column prop="email" label="操作" width="180">
                  <!-- scope 是一个名字 -->
                   <template slot-scope="scope">
                     <!-- 我们可以通过scope.$index 获取索引 scope.row获取这一行的数据 -->
                     <el-button type="primary" size="mini" icon="el-icon-edit" plain></el-button>
                   </template>
              </el-table-column>
            </el-table>
      </el-tab-pane>
      <!-- 静态参数 -->
      <el-tab-pane label="静态参数" name="second">
           <el-button class='my-btn' type="primary" size="mini" disabled>添加静态参数</el-button>
                 <!-- 表格 -->
            <el-table :data="staticList" style="width: 100%" border>
              <el-table-column type="index"></el-table-column>
              <el-table-column prop="username" label="属性名称" width="180"></el-table-column>
              <el-table-column prop="username" label="属性值" width="180"></el-table-column>
              <el-table-column prop="email" label="操作" width="180">
                  <!-- scope 是一个名字 -->
                  <template slot-scope="scope">
                    <!-- 我们可以通过scope.$index 获取索引 scope.row获取这一行的数据 -->
                    <el-button type="primary" size="mini" icon="el-icon-edit" plain></el-button>
                  </template>
              </el-table-column>
            </el-table>
      </el-tab-pane>
     
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "roles",
  data() {
    return {
      // tabs用到的数据
      activeName: "first",
      // table的数据
      dticList:[{},{}],
      staticList:[{},{}]
    };
  },

  methods: {
    async handleEdit(index, row) {
      // 获取编辑数据
      let res = await this.$axios.get(`users/${row.id}`);
      // console.log(res);
      if (res.data.meta.status == 200) {
        // 获取成功,把数据显示到表单里面
        this.editForm = res.data.data;
        // 显示弹框
        this.editFormVisible = true;
      }
    },
    // 编辑用户提交
    async editSubmit() {
      // 发送请求,提交数据
      let res = await this.$axios.put(`users/${this.editForm.id}`, {
        email: this.editForm.email,
        mobile: this.editForm.mobile
      });
      // console.log(res);
      if (res.data.meta.status == 200) {
        // 刷新页面 关闭弹框
        this.search();
        this.editFormVisible = false;
      }
    },

    // 搜索用户功能
    async search() {
      let res = await this.$axios.get("users", {
        params: this.sendData
      });
      // console.log(res);
      this.usersList = res.data.data.users;
      this.total = res.data.total;
    },

    // 添加用户
    onSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 成功发送请求添加到数据库
          let res = await this.$axios.post("users", this.addForm);
          // console.log(res);
          if (res.data.meta.status == 201) {
            // 添加成功 刷新页面
            this.search();
            // 关闭弹框
            this.dialogFormVisible = false;
          } else {
            this.$message.error("请输入内容");
            return false;
          }
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },

    // 删除用户
    deleteUser(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$axios.delete(`users/${row.id}`);
          // console.log(res);
          if (res.data.meta.status == 200) {
            // 删除成功,刷新页面
            this.search();
            //   this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    // 用户状态改变事件
    statusChange(row) {
      //发送请求,改变状态
      this.$axios.put(`users/${row.id}/state/${row.mg_state}`);
    },
    async role(row) {
      // 显示弹框
      this.roleFormVisible = true;
      // 获取数据,当前点击的角色
      let res = await this.$axios.get("roles");
      // console.log(row);

      // console.log(res);
      // 当前点击的用户
      this.roleUser = row;
      // 角色列表
      this.rolesList = res.data.data;
    },

    // 分配角色
    async roleSubmit(formName) {
      let res = await this.$axios.put(`users/${this.roleUser.id}/role`, {
        rid: this.roleUser.role_name
      });
      console.log(res);
      if (res.data.meta.status == 200) {
        // 关闭弹框, 刷新页面
        this.roleFormVisible = false;
        this.search();
      }
    },
    // 页码改变
    currentpage(current) {
      this.sendData.pagenum = current;
      this.search();
    },
    // 页容量改变
    pagenum(num) {
      this.sendData.pagesize = num;
      this.search();
    }
  },

  // 获取列表数据
  created() {
    this.search();
  }
};
</script>

<style lang="scss">
.users-container {
  background-color: #e9eef3;
  .my-alert{
      margin: 20px 0;
  }
  .my-row{
      margin-bottom: 20px;
  }
  .my-btn{
      margin-bottom: 20px;
  }
}
</style>

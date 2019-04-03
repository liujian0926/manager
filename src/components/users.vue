
<template>
  <div class="users-container">
    <!-- 头部面包屑 -->
    <my-break sectitle="用户管理" threetitle='用户列表'></my-break>

    <el-row>
      <!-- 输入框 -->
      <el-col :span="12">
        <el-input placeholder="请输入内容" v-model="sendData.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <!-- 按钮 -->
      <el-col :span="6">
        <el-button type="success" plain class="btn-add" @click="dialogFormVisible=true">添加用户</el-button>
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
          <el-switch
            @change="statusChange(scope.row)"
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
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
    <el-pagination
      :page-sizes="[3,6,9,12]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="pagenum"
      @current-change='currentpage'
    ></el-pagination>

    <!-- 添加用用户弹框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="addForm" :rules="addRules" ref="addForm">
        <el-form-item label="用户名" label-width="100px" prop="username">
          <el-input v-model="addForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" label-width="100px" prop="password">
          <el-input v-model="addForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="addForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="addForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit('addForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑弹框 -->
    <el-dialog title="编辑用户" :visible.sync="editFormVisible">
      <el-form :model="editForm" :rules="addRules" ref="editForm">
        <el-form-item label="用户名" label-width="100px" prop="username">
          <el-input v-model="editForm.username" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="editForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit('editForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 角色弹框 -->
    <el-dialog title="角色切换" :visible.sync="roleFormVisible">
      <el-form ref="roleForm">
        <el-form-item label="当前用户" label-width="100px" prop="username">{{roleUser.username}}</el-form-item>
        <el-form-item label="选择角色" label-width="100px">
          <el-select v-model="roleUser.role_name" placeholder="请选择">

            <el-option
              v-for="item in rolesList"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            ></el-option>

          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roleFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="roleSubmit('roleForm')">确 定</el-button>
      </div>
    </el-dialog>
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
      total: 0,
      // 添加用户弹框显示
      dialogFormVisible: false,
      // 编辑弹框
      editFormVisible: false,
      // 角色切换显示
      roleFormVisible: false,
      // 角色列表
      rolesList: [],
      // 当前角色名
      roleUser: "",
      // 表单内容
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      editForm: {
        username: "",
        email: "",
        mobile: ""
      },
      addRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, message: "长度在4-20个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用密码", trigger: "blur" },
          { min: 6, message: "长度在6-20个字符", trigger: "blur" }
        ]
      }
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
      console.log(res);
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
   async roleSubmit(formName){
      let res = await this.$axios.put(`users/${this.roleUser.id}/role`,{
        rid:this.roleUser.role_name
      })
      console.log(res);
      if(res.data.meta.status==200){
        // 关闭弹框, 刷新页面
        this.roleFormVisible = false;
        this.search();
      }
      
    },
    // 页码改变
    currentpage(current){
      this.sendData.pagenum = current
      this.search()
    },
    // 页容量改变
    pagenum(num){
      this.sendData.pagesize = num
      this.search()
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

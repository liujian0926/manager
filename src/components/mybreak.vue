<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="my-bread">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{sectitle}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{threetitle}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    props: ['sectitle','threetitle']
};
</script>
<style>
.my-aside {
  background-color: skyblue;
}
.my-main {
  background-color: #e9eef3;
  padding-top: 0;
}
</style>

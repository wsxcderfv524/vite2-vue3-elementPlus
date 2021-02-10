<template>
  <div>
    <el-input style="width: 150px"></el-input>
    <el-button>搜索</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script setup>
import { reactive } from "vue";
const tableData = reactive([
  {
    date: "2020-09-09",
    name: "张三",
    address: "浙江省杭州市滨江区",
  },
]);
</script>

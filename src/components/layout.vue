<template>
  <header class="head">
    <span class="title">吃了吗</span>
    <div>
      <span>admin</span>
      <el-button type="text" @click="loginOut">退出</el-button>
    </div>
  </header>
  <div class="menuBox">
    <el-menu background-color="#545c64" text-color="#fff" default-active="user">
      <el-menu-item index="user">
        <template #title>用户管理</template>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="public">
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const loginOut = () => {
  router.push("/");
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #eee;

  .title {
    display: inline-block;
    width: 220px;
    height: 100%;
    line-height: 56px;
    background-color: #545c64;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
}
.menuBox {
  width: 220px;
  height: calc(100% - 56px);
  background-color: #545c64;
  .el-menu {
    border: none;
  }
}
.public {
  position: absolute;
  top: 56px;
  left: 220px;
  box-sizing: border-box;
  padding: 20px;
  width: calc(100% - 220px);
  height: calc(100% - 56px);
}
</style>

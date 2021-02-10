<template>
  <div class="loginBox">
    <div class="title">登录页面</div>
    <el-form :model="state">
      <el-form-item>
        <el-input placeholder="请输入用户名" v-model="state.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="state.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="subBtn" @click="submitHandler"
      >登入</el-button
    >
  </div>
</template>

<script setup>
import { reactive, defineProps } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

defineProps({
  name: String,
});
const router = useRouter();
const state = reactive({
  name: "",
  password: "",
});

const submitHandler = () => {
  if (state.name === "admin" && state.password === "123456") {
    router.push("/user/userList");
  } else {
    ElMessage("账号：admin,密码：123456");
  }
};
</script>

<style lang="less" scoped>
.loginBox {
  width: 500px;
  margin: 200px auto;
  .title {
    font-size: 30px;
    text-align: center;
    color: #409eff;
  }

  .subBtn {
    width: 100%;
  }
}
</style>

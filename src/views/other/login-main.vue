<!--
 * @Author: yizhongZhao
 * @Date: 2022/8/11 17:13
 * @Description: 
-->

<template>
  <div class="login-card">
    <div class="header">
      <div>
        <span class="logo"></span>
        <h1></h1>
      </div>
      <h2></h2>
    </div>
    <div class="login-card-main">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="账号登录" name="accountLogin">
          <el-row>
            <el-col :offset="4" :span="16" class="mt-2">
              <el-input placeholder="请输入账号"/>
            </el-col>
            <el-col :span="4"></el-col>
            <el-col :offset="4" :span="16" class="mt-2">
              <el-input placeholder="请输入密码"/>
            </el-col>
            <el-col :span="4"></el-col>
            <el-col :offset="4" :span="10" class="mt-2">
              <el-input placeholder="请输入短信验证码"/>
            </el-col>
            <el-col :offset="1" :span="5" class="mt-2">
              <el-button disabled type="primary">获取验证码</el-button>
            </el-col>
            <el-col :offset="4" :span="16" class="mt-2">
              <el-button style="width: 100%" type="primary" @click="login">登录</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="短信登录" name="phoneNumberLogin">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoginMain"
}
</script>
<script lang="ts" setup>
import {ref} from 'vue'
import type {TabsPaneContext} from 'element-plus'
import router from "@/plugins/router";

const activeName = ref('accountLogin')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const login = () => {
  router
}
</script>

<style lang="scss" scoped>
.login-card {
  width: 480px;
  /*border: 1px solid red;*/
  margin: 0 auto;
  padding-top: 56px;
}

:deep(.el-tabs__nav) {
  width: 260px;
}

:deep(.el-tabs__nav-scroll) {
  padding-left: 110px;
}

//去掉灰色的线
:deep(.el-tabs__nav-wrap::after) {
  position: static !important;
}

:deep(.el-tabs__item) {
  width: 50%;
  text-align: center;
}

.mt-2 {
  margin-top: 16px;
}
</style>
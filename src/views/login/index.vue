<script lang="ts" setup>
  import LoginLayout from '@/views/login/layout/login-layout.vue';
  import { reactive, ref } from 'vue';
  import type { FormInstance, FormRules } from 'element-plus';
  const ruleFormRef = ref<FormInstance>();

  const form = reactive({
    account: '',
    passWord: '',
  });
  const validateAccount = (_, value, callback) => {
    if (!value) {
      callback(new Error('请输入账号'));
    } else {
      callback();
    }
  };
  const validatePassWord = (_, value, callback) => {
    if (!value) {
      callback(new Error('请输入密码'));
    } else {
      callback();
    }
  };

  const rules = reactive<FormRules<typeof form>>({
    account: [{ validator: validateAccount, trigger: 'blur' }],
    passWord: [{ validator: validatePassWord, trigger: 'blur' }],
  });

  const onLogin = () => {
    console.log(ruleFormRef);
    console.log('submit!');
  };
</script>

<template>
  <login-layout>
    <div class="flex justify-center items-center h-full">
      <el-card class="w-80" status-icon>
        <el-form :model="form" :rules="rules" @submit.prevent>
          <el-form-item prop="account">
            <el-input v-model="form.account" clearable placeholder="账号" />
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              v-model="form.passWord"
              clearable
              placeholder="密码"
              show-password
              type="password"
            />
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" type="primary" @click="onLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </login-layout>
</template>

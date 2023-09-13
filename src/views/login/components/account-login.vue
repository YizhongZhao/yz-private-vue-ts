<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { FormInstance, FormRules } from 'element-plus';
  import { login } from './api';
  const form = reactive({
    account: '',
    passWord: '',
  });
  const ruleFormRef = ref<FormInstance>();

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

  const btnLoading = ref<boolean>(false);
  const accountErrorMsg = ref<string>('');
  const onLogin = async () => {
    accountErrorMsg.value = null;
    try {
      btnLoading.value = true;
      await ruleFormRef.value.validate();
      await login({
        username: form.account,
        passWord: form.passWord,
      });
      console.log('submit!');
    } catch (e) {
      if (e.code === '100001') {
        accountErrorMsg.value = e.message;
      }
    } finally {
      btnLoading.value = false;
    }
  };
</script>

<template>
  <div class="flex justify-center items-center h-full">
    <el-card class="w-80 pt-2" status-icon shadow="hover">
      <el-form ref="ruleFormRef" :model="form" :rules="rules" @submit.prevent>
        <el-form-item prop="account" :error="accountErrorMsg">
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
        <div>
          <el-button class="w-full" type="primary" :loading="btnLoading" @click="onLogin"
            >登录</el-button
          >
        </div>
        <div class="text-right pt-2">
          <el-button type="primary" link>注册</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped></style>

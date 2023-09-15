<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { FormInstance, FormRules } from 'element-plus';
  import { checkAccountUnique, register, reqQRCode } from '@/views/login/components/api';

  const form = reactive({
    account: '',
    username: '',
    passWord: '',
  });
  const ruleFormRef = ref<FormInstance>();
  const validateAccount = (_rule, value, callback) => {
    if (!value) return callback(new Error('请输入账号'));
    checkAccountUnique({ account: value })
      .then(() => {
        callback();
      })
      .catch(() => {
        callback('账号重复');
      });
  };
  const rules = reactive<FormRules<typeof form>>({
    account: [{ validator: validateAccount, trigger: 'blur' }],
    username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
    passWord: [
      { min: 6, max: 6, trigger: 'blur', message: '请输入正确的值' },
      { required: true, trigger: 'blur', message: '请扫描二维码并输入结果' },
    ],
  });

  type RegisterModel = 'STEP1' | 'STEP2';
  const model = ref<RegisterModel>('STEP1');

  const btnLoading = ref<boolean>(false);
  const imgUrl = ref<string>('');
  const secretId = ref<string>('');
  const onNextStep = async () => {
    try {
      btnLoading.value = true;
      const { data } = await reqQRCode({ account: form.account, username: form.username });
      imgUrl.value = data.url;
      secretId.value = data.id;
      model.value = 'STEP2';
    } finally {
      btnLoading.value = false;
    }
  };

  const onRegister = async () => {
    const res = await register({
      id: secretId.value,
      passWord: form.passWord,
    });
    console.log(res);
  };
</script>

<template>
  <el-card class="w-80 pt-2" status-icon>
    <el-form ref="ruleFormRef" :model="form" :rules="rules" @submit.prevent>
      <el-form-item prop="account">
        <el-input
          v-model.trim="form.account"
          :disabled="model !== 'STEP1'"
          clearable
          maxlength="20"
          placeholder="账号"
        />
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model.trim="form.username"
          :disabled="model !== 'STEP1'"
          clearable
          maxlength="20"
          placeholder="用户名"
        />
      </el-form-item>
      <div v-if="model === 'STEP2'" class="text-center">
        <el-image :src="imgUrl" lazy />
        <el-form-item prop="passWord">
          <el-input
            v-model.trim="form.passWord"
            clearable
            maxlength="6"
            placeholder="请扫描二维码并输入结果"
          />
        </el-form-item>
      </div>
      <div>
        <el-button
          v-if="model === 'STEP1'"
          class="w-full"
          type="primary"
          :loading="btnLoading"
          @click="onNextStep"
          >下一步
        </el-button>
        <el-button v-else class="w-full" type="primary" :loading="btnLoading" @click="onRegister"
          >注册</el-button
        >
      </div>
    </el-form>
  </el-card>
</template>

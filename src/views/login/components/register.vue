<script setup lang="ts">
  import { reactive, ref } from 'vue/dist/vue';
  import { FormInstance, FormRules } from 'element-plus';
  const form = reactive({
    account: '',
  });
  const ruleFormRef = ref<FormInstance>();
  const rules = reactive<FormRules<typeof form>>({
    account: [{ required: true, trigger: 'blur' }],
  });
</script>

<template>
  <el-card class="w-80 pt-2" status-icon>
    <el-form ref="ruleFormRef" :model="form" :rules="rules" @submit.prevent>
      <el-form-item prop="account" :error="accountErrorMsg">
        <el-input v-model="form.account" clearable placeholder="账号" />
      </el-form-item>
      <el-form-item prop="account" :error="accountErrorMsg">
        <el-input v-model="form.account" clearable placeholder="用户名" />
      </el-form-item>
      <div class="text-right pt-2">
        <el-button type="primary" link @click="emits('register')">返回登录</el-button>
      </div>
    </el-form>
  </el-card>
</template>

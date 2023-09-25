<script lang="ts" setup>
  import { ref } from 'vue';
  import LoginLayout from '@/views/login/layout/login-layout.vue';
  import AccountLogin from '@/views/login/components/account-login.vue';
  import Register from '@/views/login/components/register.vue';

  type LoginModel = 'login' | 'register';
  const model = ref<LoginModel>('login');
  const onRegister = () => {
    model.value = 'register';
  };
</script>

<template>
  <login-layout>
    <div class="flex justify-center items-center h-full">
      <account-login v-if="model === 'login'" @register="onRegister"></account-login>
      <register v-else-if="model === 'register'"></register>
    </div>
  </login-layout>
</template>

<template>
  <el-card class="card">
    <el-form label-width="auto">
      <el-row :gutter="24">
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="密码">
            <el-input v-model="passWord" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button @click="login">登录</el-button>
    <el-button v-if="route.name === 'Login'" type="primary" @click="back">返回</el-button>
  </el-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/store/user';
  import { useRouter, useRoute } from 'vue-router';

  const User = useUserStore();
  const router = useRouter();
  const route = useRoute();

  const userName = ref('');
  const passWord = ref('');

  const login = () => {
    User.setUserName(userName.value);
    User.setPassWord(passWord.value);
    router.push({
      name: 'login',
    });
  };

  const back = () => {
    User.setUserName('');
    User.setPassWord('');
    router.push({
      name: '404',
    });
  };
</script>

<style lang="scss" scoped>
  .card {
    width: 1000px;
    margin: 60px auto;
    font-size: 16px;
  }
</style>

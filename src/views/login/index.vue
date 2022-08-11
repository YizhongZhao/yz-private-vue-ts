<!--
 * @Author: yizhongZhao
 * @Date: 2022/8/10
 * @Description: 登录页
-->


<template>
  <div class="main">
    <layout-header-lang></layout-header-lang>
    <login-main></login-main>
  </div>
</template>

<script lang="ts">
export default {
  name: "login"
}
</script>

<script lang="ts" setup>
import LayoutHeaderLang from '@/components/layout/layout-header-lang.vue'
import LoginMain from "@/views/login/login-main.vue";

</script>

<style scoped>
.main {
  width: 100%;
  min-width: 500px;
  height: 100vh;
  min-height: 680px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/background.ebcb9160.svg);
}
</style>
<script lang="ts" setup>
import LoginLayout from "@/views/login/layout/login-layout.vue";
import { reactive } from "vue";

const formInline = reactive({
  user: "",
  region: "",
  date: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<template>
  <login-layout>
    <div class="flex justify-center items-center h-full">
      <el-card class="w-80">
        <el-form :model="formInline" @submit.prevent>
          <el-form-item>
            <el-input
              v-model="formInline.user"
              clearable
              placeholder="Approved by"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formInline.user"
              clearable
              placeholder="Approved by"
            />
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" type="primary" @click="onSubmit"
              >Query</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </login-layout>
</template>

<style scoped></style>

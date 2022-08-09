<script lang="ts" setup>
import {ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <el-button icon="el-icon-Search" type="primary">Search</el-button>
    <el-icon style="vertical-align: middle">
      <el-icon-Search/>
    </el-icon>

    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: #c62c3e;
  font-size: 16px
}
</style>

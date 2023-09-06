<!--
 * @Author: yizhongZhao
 * @Date: 2023/3/23 18:16
 * @Description: 
-->

<template>
  <div>子组件</div>
  <div>{{ width }}</div>
  <ElButton type="primary"> primary </ElButton>
</template>

<script lang="ts">
  export default {
    name: 'Son',
  };
</script>
<script lang="ts" setup>
  import { defineProps } from 'vue';
  import { ElButton } from 'element-plus';

  const { width = '30%' } = defineProps<{
    width: string;
    title?: string;
    dialogVisible?: boolean;
  }>();
</script>
<style scoped></style>

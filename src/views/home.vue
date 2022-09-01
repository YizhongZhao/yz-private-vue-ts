<!--
 * @Author: yizhongZhao
 * @Date: 2022/8/31 11:22
 * @Description: 
-->

<template>
  <NButton style="float: right">夜间模式</NButton>
  <el-row style="height: 100%;">
    <el-col :span="6">
      <LayoutMenu/>
    </el-col>
    <el-col :span="6">
      <NButton>111</NButton>
      <NButton>222</NButton>

    </el-col>
  </el-row>
</template>


<script lang="ts" setup>
import {NButton} from 'naive-ui'
import LayoutMenu from '@/components/layout/layout-menu.vue'
</script>
<style lang="scss" scoped>

</style>
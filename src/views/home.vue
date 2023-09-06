<!--
 * @Author: yizhongZhao
 * @Date: 2022/8/31 11:22
 * @Description: 
-->

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item disabled index="3">Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
</script>

<style lang="scss" scoped></style>

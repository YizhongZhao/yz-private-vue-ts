<!--
 * @Author: yizhongZhao
 * @Date: 2022/8/11 16:38
 * @Description: 头部选择语言
-->

<template>
  <div>
    <el-dropdown size="small" style="float: right;margin: 16px 16px 0 0">
      <div class="icon"></div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>简体中文</el-dropdown-item>
          <el-dropdown-item disabled divided>English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
export default {
  name: "LayoutHeaderLang"
}
</script>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  float: right
}

.icon {
  cursor: pointer;
  float: right;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/lang.svg);
}
</style>
<!--
 * @Author: yizhongZhao
 * @Date: 2022/8/31 11:22
 * @Description: 
-->

<template>
  <div class="flex h-full">
    <el-menu
      class="h-full"
      default-active="icon"
      :collapse="isCollapse"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      @select="onSelect"
    >
      <el-menu-item index="icon">
        <el-icon>
          <svg-icon icon-class="logo"></svg-icon>
        </el-icon>
        <span class="p-2 text-xl"> Rio-Admin </span>
      </el-menu-item>
      <el-menu-item v-for="item in routerList" :key="item.name" :index="item.name">
        <el-icon>
          <svg-icon :icon-class="item.icon"></svg-icon>
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
    <div class="flex-1">
      <div class="float-right">
        <span><el-switch v-model="closeStu" /></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" name="home" setup>
  import { onMounted, ref, watch } from 'vue';
  import SvgIcon from '@/components/global/svg-icon.vue';
  import { useRoute } from 'vue-router';
  import { globalRoutes } from '@/router/globalRoutes';
  const routerList = ref([]);

  const route = useRoute();
  console.log(route);

  const isCollapse = ref<boolean>(false);
  const closeStu = ref<boolean>(true);
  watch(closeStu, (newValue) => {
    isCollapse.value = !newValue;
  });

  const onMouseenter = () => {
    if (closeStu.value === false) {
      isCollapse.value = false;
    }
  };
  const onMouseleave = () => {
    if (closeStu.value === false) {
      isCollapse.value = true;
    }
  };

  const onSelect = (index) => {
    if (index === 'home') {
      console.log(111);
    }
  };
  onMounted(() => {
    routerList.value = globalRoutes
      .filter((i) => i.meta.hidden === false)
      .map((i) => {
        return { name: i.name, title: i.meta.title, icon: i.meta.icon || 'menu-default' };
      });
  });
</script>

<style lang="scss" scoped>
  .home-icon {
    width: 18px;
    height: 18px;
  }
</style>

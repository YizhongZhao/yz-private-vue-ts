<script lang="ts" setup></script>

<template>
  <div class="login-container">
    <div class="main-container h-full">
      <div class="flex justify-between p-8 top-0 h-1/6">
        <div class="flex">
          <svg-icon class="w-10 h-10 items-center" icon-class="logo"></svg-icon>
          <div class="pl-4 leading-10 font-bold text-2xl text-slate-800"> Rio-Admin </div>
        </div>
        <div>
          <svg-icon
            class="w-6 h-6 items-center cursor-pointer text-slate-400 hover:text-black transition duration-500"
            icon-class="lang"
          ></svg-icon>
        </div>
      </div>
      <div class="h-2/3">
        <slot></slot>
      </div>
      <footer class="h-1/6 w-full">222</footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .login-container {
    width: 100vw;
    height: 100vh;
    background: #f0f2f5 url(/background.ebcb9160.svg) no-repeat 50%;

    .main-container {
      max-width: 1440px;
      margin: 0 auto;
      height: 100vh;
      overflow: hidden;
    }
  }
</style>

<script lang="ts" setup>
import {NMessageProvider} from 'naive-ui'
import MessageApi from './components/message-api.vue';

</script>

<template>
  <n-message-provider>
    <message-api></message-api>
    <router-view></router-view>
  </n-message-provider>
</template>

<style>
html, body, #app {
  height: 100%;
}
</style>

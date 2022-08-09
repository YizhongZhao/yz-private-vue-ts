<script lang="ts" setup>
import {ref} from 'vue'
import {useTestStore} from '@/store/index'

const Test = useTestStore()

defineProps<{ msg: string }>()

const count = ref(0)

const changePhoneNumber = () => {
  Test.setPhoneNumber(17862795092)
}

</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <el-button icon="el-icon-Search" type="primary" @click="changePhoneNumber">Search</el-button>
    <el-icon style="vertical-align: middle">
      <el-icon-Search/>
    </el-icon>
    <button type="button" @click="count++">count is {{ count }}</button>
    <hr>
    <h1>Pinia : {{ Test.phoneNumber }}---{{ Test.name }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: #c62c3e;
  font-size: 16px
}
</style>

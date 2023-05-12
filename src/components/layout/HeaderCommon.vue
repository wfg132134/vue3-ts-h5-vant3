<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="orders">订单中心</el-menu-item>
      <el-menu-item index="history">历史记录</el-menu-item>
      <el-sub-menu index="language">
        <template #title>国际化切换</template>
        <el-menu-item index="zh">中文</el-menu-item>
        <el-menu-item index="en">英文</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="center">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { mainStore } from '@/store' // 引入store

const store = mainStore()
console.log("store",store);

const handleSelect = (language: string, keyPath: string[]) => {
  store.SET_LOCALE(language);
};
</script>

<style scoped></style>

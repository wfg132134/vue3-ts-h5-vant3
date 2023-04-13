<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { computed } from "vue";
import zh from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import { mainStore } from "@/store"; // 引入store

const store = mainStore();
store.GET_LOCALE();
let locale = computed(() => {
  return store.localeLanguage === "zh" ? zh : en;
});
</script>
<style scoped></style>

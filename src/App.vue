<template>
  <!-- 头部地方 -->
  <header-common @chang-language="changLanguage"></header-common>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import HeaderCommon from "@/components/layout/HeaderCommon";

let language = ref("zhCn");
let locale = computed(() => {
  return language.value === "zhCn" ? zhCn : en;
});
const changLanguage = (val) => {
  language.value = val
};
</script>
<style scoped></style>

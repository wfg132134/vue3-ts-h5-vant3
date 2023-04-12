<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="orders">订单中心</el-menu-item>
      <el-menu-item index="history">历史记录</el-menu-item>
      <el-sub-menu index="language">
        <template #title>国际化切换</template>
        <el-menu-item index="zhCn">中文</el-menu-item>
        <el-menu-item index="en">英文</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="center">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import { saveLanguage, fetchLanguage } from "@/components/layout";
const activeIndex = ref("orders");
//  defineEmits使用类型声明
const emit = defineEmits<{ (e: "changLanguage", value: string): void }>();
// defineEmits运行时声明
// const emit = defineEmits(["changLanguage"]);

fetchLanguage().then((res) => {
  emit("changLanguage", res.result.name);
});
const handleSelect = (language: string, keyPath: string[]) => {
  emit("changLanguage", language);
  saveLanguage(language);
};
</script>

<style scoped></style>

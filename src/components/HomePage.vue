<template>
  <div>
    <!-- 头部地方 -->
    <header-common @chang-language="changLanguage"></header-common>
    <h1>{{ $t("message.home") }}</h1>
    <el-date-picker type="date" placeholder="Pick a day" />
  </div>
</template>

<script lang="ts" setup>
import HeaderCommon from "@/components/layout/HeaderCommon";

</script>

<style lang="scss" scoped></style>

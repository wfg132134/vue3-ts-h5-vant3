<template>
  <div>
    <BasicsForm :options="options" />
  </div>
</template>

<script lang="ts" setup>
import BasicsForm from "./BasicsForm.vue";
import { FormOptions } from "./form";

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: 'username',
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名长度在2-6之间",
      },
    ],
    attrs: {
      validateOnRuleChange: false
    }
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: 'password',
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 16,
        message: "密码长度在6-16之间",
      },
    ],
    attrs: {
      showPassword: true,
      validateOnRuleChange: false
    }
  },
];
</script>

<style scoped></style>

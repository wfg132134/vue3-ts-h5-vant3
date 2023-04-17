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
  {
    type: "select",
    value: "",
    label: "选项框",
    prop: 'part',
    rules: [
      {
        required: true,
        message: "内容不能为空",
        trigger: "blur",
      },
    ],
    attrs:{
      style: {
        width: '100%'
      }
    },
    children: [
      {
        type: "option",
        value: "1",
        label: "经理",
      },
      {
        type: "option",
        value: "2",
        label: "主管",
      },
      {
        type: "option",
        value: "3",
        label: "员工",
      }
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: 'checkList',
    label: '运动',
    children:[
      {
        type: "checkbox",
        label: "游泳",
        value: "3",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "足球",
        value: "3",
      }
    ],
  },
];
</script>

<style scoped></style>

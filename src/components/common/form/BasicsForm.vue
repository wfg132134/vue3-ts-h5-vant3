<template>
  <el-form label-width="120px" :model="model" :rules="rules" :validate-on-rule-change=false>
    <el-form-item v-for="(item, index) in options" :key="index" :label="item.label" :prop="item.prop">
      <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs"></component>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted } from "vue";
import { FormOptions } from "./form";
import cloneDeep from "lodash/cloneDeep";

let props = defineProps({
  options: Array as PropType<FormOptions[]>,
});

let model = ref<any>({});
let rules = ref<any>({});

onMounted(() => {
  let m: any = {};
  let r: any = {};
  props.options.map((item: FormOptions) => {
    m[item.prop!] = item.value;
    r[item.prop!] = item.rules;
  });
  model.value = cloneDeep(m);
  rules.value = cloneDeep(r);
});
</script>

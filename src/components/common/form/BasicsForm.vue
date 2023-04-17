<template>
  <el-form label-width="120px" :model="model" :rules="rules" :validate-on-rule-change=false v-if="model">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item  v-if="!item.children || !item.children!.length" :label="item.label" :prop="item.prop">
        <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs"></component>
      </el-form-item>

      <el-form-item  v-if="item.children && item.children!.length" :label="item.label" :prop="item.prop">
        <component :is="`el-${item.type}`" v-model="model[item.prop]" v-bind="item.attrs">
          <component :is="`el-${child.type}`" :value="child.value" v-bind="child.attrs" :label="child.label" v-for="(child, i) in item.children" :key="i"></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch } from "vue";
import { FormOptions } from "./form";
import cloneDeep from "lodash/cloneDeep";

let props = defineProps({
  options: Array as PropType<FormOptions[]>,
});

let model = ref<any>(null);
let rules = ref<any>(null);


let initForm = ()=>{
  if(props.options && props.options.length){
    let m: any = {};
    let r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
}
onMounted(() => {
  initForm();
});

watch(()=>props.options,()=>{
  initForm();
},{deep: true})
</script>

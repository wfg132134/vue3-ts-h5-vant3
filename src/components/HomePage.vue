<template>
  <div>
    home page
    <el-button type="primary" class="aa"><span>Primary</span></el-button>
    <el-date-picker type="date" placeholder="Pick a day" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMydata } from "@/api";
import DB from "@/utils/indexedDB";

export default defineComponent({
  setup() {
    const data = getMydata();
    console.log("data", data);
    const db =new DB('mytest');
    db.openStore('room','id');
    return {};
  },
});
</script>

<style lang="scss" scoped>
.aa {
  span {
    color: $red;
  }
}
</style>

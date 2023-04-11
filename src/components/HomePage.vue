<template>
  <div>
    home page
    <el-button type="primary" class="aa" @click="addDataHandel"
      ><span>添加</span></el-button>
      <el-button type="primary" class="aa" @click="getAllDataHandel">获取所有</el-button>
    <el-date-picker type="date" placeholder="Pick a day" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMydata, fetchMydata } from "@/api";
import DB from "@/utils/indexedDB";

export default defineComponent({
  setup() {
    function getAllDataHandel() {
      fetchMydata().then(res=>{
        console.log('Mock接口',res);
      })
    }
    return {
      getAllDataHandel,
    };
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

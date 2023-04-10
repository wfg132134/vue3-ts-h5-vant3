<template>
  <div>
    home page
    <el-button type="primary" class="aa"><span>Primary</span></el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMydata } from '@/api'

export default defineComponent({
  setup() {
    const data = getMydata()
    console.log('data',data);
    return {};
  },
});
</script>

<style lang="scss" scoped>
.aa{
  span {
    color: $red;
  }
}
</style>

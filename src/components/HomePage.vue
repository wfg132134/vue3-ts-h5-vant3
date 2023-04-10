<template>
  <div>
    home page
    <el-button type="primary" class="aa"><span>Primary</span></el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
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

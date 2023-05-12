<template>
  <div>
    about {{ token }}

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mainStore } from "../store"; // 引入store
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const store = mainStore();
    const { token } = storeToRefs(store);

    return {
      token,
    };
  },
});
</script>

<style scoped>
</style>

<template>
  <div class="grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
</script>

<style scoped lang="scss">
.grid {
  border: 1px solid #999;
  width: 300px;
  height: 200px;
  display: grid;
  margin: 20px;
  /* 等同于 grid-template-columns: 1fr 1fr 1fr; */
	grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr; /* 指定 2行 */
  grid-auto-rows: 40px;

  div {
    background-color: bisque;
    border-radius: 4px;
    border: 1px solid #ccc;

    &:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 4;
    }

    &:nth-of-type(2) {
      grid-row: 2 / 4;
    }

    &:nth-of-type(3) {
      grid-column: 2 / span 2; /* span表示占据几行，这里表示从2开始，占据2行，也就是网格线2到4 */
    }

    &:nth-of-type(6) {
      grid-column: 1 / span 3;
    }
  }
}
</style>
